import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { Divider, ProgressBar, Surface } from 'react-native-paper';
import ExerciseSetItem from '../../src/components/ExerciseSetItem';
import RoundButton from '../../src/components/shared/roundButton';
import { NavigationContext } from '../../src/contexts/navigationContext';
import { WorkoutSetContext } from '../../src/contexts/workoutSetContext';
import { Workout, WorkoutSet } from '../../src/info/types';
import { paramsStyles, styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const workoutPage = () => {
	const { data, setData } = useContext(WorkoutSetContext) || {};
	const { navigationInfo, setNavigationInfo } =
		useContext(NavigationContext) || {};

	const [exercises, setExercises] = useState<Workout[]>([]);
	const [total, setTotal] = useState(100);
	const [progress, setProgress] = useState(0);

	const params = useLocalSearchParams();
	const { title, id } = params;

	const formattedProgress = () => {
		return Math.ceil((progress / total) * 100);
	};

	const renderEmoji = () => {
		const prog = Math.ceil((progress / total) * 100);
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

	const storeData = async (key: string, value: number) => {
		try {
			await AsyncStorage.setItem(key, String(value));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (data && params && setNavigationInfo) {
			const set = data.find((ex) => ex.id === Number(id));
			if (set) {
				setExercises(set.exercises);
				setNavigationInfo({ workoutSetSelectedID: Number(id) });
				setTotal(set.exercises.length);
			}
			console.log(progress, ' ', total);
			console.log(JSON.stringify(data));
		}
	}, []);

	useEffect(() => {
		if (data) {
			const workout = data.find((el) => el.id === Number(id));
			const allComplete = workout?.exercises.filter(
				(el) => el.isComplete === true
			);
			if (allComplete && allComplete?.length > 0) {
				setProgress(allComplete.length);
			}
		}
	}, [data]);

	const setTrainingProgressTo = (condition: boolean) => {
		if (data && setData) {
			const previousData = JSON.parse(JSON.stringify(data)) as WorkoutSet[];

			previousData
				.find((el) => el.id === Number(id))
				?.exercises.forEach((ex) => {
					ex.isComplete = condition;
				});
			setData(previousData);
			const set = data.find((ex) => ex.id === Number(id));
			set && setExercises(set?.exercises);
		}
	};

	return (
		<>
			<Stack.Screen options={{ title: String(title) }} />
			<View style={styles.container}>
				<Surface style={styles.header}>
					<Text style={styles.headerText}>Progresso do Treino</Text>
					<View style={styles.progressBarContainer}>
						<Text style={styles.emoji}>{renderEmoji()}</Text>
						<ProgressBar
							visible={true}
							progress={progress / total}
							style={
								paramsStyles(Dimensions.get('window').width - 140).progress
							}
						/>
						<Text>{formattedProgress()}%</Text>
					</View>
					<View style={styles.headerTop}>
						<RoundButton
							iconName='refresh'
							onPress={() => {
								setTrainingProgressTo(false);
								setProgress(0);
							}}
						/>
						<RoundButton
							iconName='check-bold'
							onPress={() => {
								storeData('lastDone', Number(id));
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
					<FlatList<Workout>
						data={exercises}
						contentContainerStyle={{ paddingBottom: 500 }}
						renderItem={({ item }) => (
							<ExerciseSetItem
								workout={
									data
										?.find((el) => el.id === Number(id))
										?.exercises.find((ex) => ex.id === item.id) || item
								}
							/>
						)}
					/>
				</View>
			</View>
		</>
	);
};

export default workoutPage;
