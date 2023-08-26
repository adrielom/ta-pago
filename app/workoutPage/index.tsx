import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useReducer, useState } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import {
	ActivityIndicator,
	Divider,
	ProgressBar,
	Surface,
} from 'react-native-paper';
import ExerciseSetItem from '../../src/components/ExerciseSetItem';
import RoundButton from '../../src/components/shared/roundButton';
import { Workout } from '../../src/info/types';
import { initialState, workoutPageReducer } from './reducer';
import { paramsStyles, styles } from './styles';
import { WorkoutReducerSchema } from './types';

const workoutPage = () => {
	const params = useLocalSearchParams();
	const { title, id, exercisesID } = params;
	const [state, dispatch] = useReducer(workoutPageReducer, initialState);
	const { exercises, progress, isPlayOn } = state;

	const formattedProgress = () => {
		return exercises.length > 0
			? Math.ceil((progress / exercises.length) * 100)
			: 0;
	};

	const renderEmoji = () => {
		const prog = Math.ceil((progress / exercises.length) * 100);
		switch (true) {
			case prog >= 0 && prog <= 24:
				return <Text>😒</Text>;
			case prog >= 25 && prog <= 49:
				return <Text>😏</Text>;
			case prog >= 50 && prog <= 74:
				return <Text>😊</Text>;
			case prog >= 75 && prog <= 99:
				return <Text>😀</Text>;
			case prog >= 100:
				return <Text>😁</Text>;
			default:
				break;
		}
	};

	const storeData = async (key: string, value: string) => {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (params) {
			const exercisesIds: string[] = JSON.parse(exercisesID.toString());

			let execs: any[] = [];
			exercisesIds.forEach((id) => {
				firestore()
					.collection('workouts')
					.doc(id)
					.get()
					.then((e) => {
						const data = e.data();
						execs.push(data);
					})
					.finally(() => {
						dispatch({
							type: 'saveExercises',
							payload: {
								...state,
								exercises: execs,
							} as WorkoutReducerSchema,
						});
					});
			});
		}
	}, []);

	const setTrainingProgressTo = (condition: boolean) => {
		if (exercises) {
			const previousData = JSON.parse(JSON.stringify(exercises)) as Workout[];
			previousData.forEach((ex) => {
				ex.isComplete = condition;
			});
			dispatch({
				type: 'saveExercises',
				payload: { ...state, exercises: previousData },
			});
		}
	};

	return (
		<>
			<Stack.Screen options={{ title: String(title) }} />
			<View style={styles.container}>
				<Surface style={styles.header}>
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={styles.headerText}>Progresso do Treino</Text>
						<Text style={styles.emoji}>{renderEmoji()}</Text>
					</View>
					<View style={styles.progressBarContainer}>
						<ProgressBar
							visible={true}
							progress={exercises.length > 0 ? progress / exercises.length : 0}
							style={
								paramsStyles(Dimensions.get('window').width - 100).progress
							}
						/>
						<Text>{formattedProgress()}%</Text>
					</View>
					<View style={styles.headerTop}>
						<RoundButton
							iconName='refresh'
							onPress={() => {
								setTrainingProgressTo(false);
								dispatch({
									type: 'saveProgress',
									payload: { ...state, progress: 0 },
								});
							}}
						/>
						{!isPlayOn ? (
							<RoundButton
								iconName='play'
								onPress={() => {
									dispatch({
										type: 'setIsPlayingOn',
										payload: { ...state, isPlayOn: !isPlayOn },
									});
								}}
							/>
						) : (
							<View
								style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
								<RoundButton
									iconName='pause'
									onPress={() => {
										dispatch({
											type: 'setIsPlayingOn',
											payload: { ...state, isPlayOn: !isPlayOn },
										});
									}}
								/>
								<Text>time</Text>
							</View>
						)}
						<RoundButton
							iconName='check-bold'
							onPress={() => {
								storeData('lastDone', JSON.stringify({ id: id }));
								setTrainingProgressTo(true);
							}}
						/>
					</View>
				</Surface>
				<Divider style={styles.divider} />
				<View
					style={{
						marginTop: 5,
					}}>
					{exercises.length > 0 ? (
						<FlatList<Workout>
							data={exercises}
							contentContainerStyle={{ paddingBottom: 500 }}
							renderItem={({ item }) => <ExerciseSetItem workout={item} />}
						/>
					) : (
						<View
							style={{
								flex: 1,
								minHeight: 400,
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<ActivityIndicator size={'large'} />
						</View>
					)}
				</View>
			</View>
		</>
	);
};

export default workoutPage;
