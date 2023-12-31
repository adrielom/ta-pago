import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useContext, useEffect } from 'react';
import { FlatList, View, Button } from 'react-native';
import { ActivityIndicator, Divider } from 'react-native-paper';
import ExerciseSetItem from '../../src/components/ExerciseSetItem';
import ProgressHeader from '../../src/components/workoutPage/ProgressHeader';
import { UserContext } from '../../src/contexts/userContext';
import {
	IWorkoutRecordContext,
	WorkoutRecordContext,
} from '../../src/contexts/workoutSetContext';
import { Workout, WorkoutRecord } from '../../src/info/types';
import { styles } from './styles';
import {
	getLocalStorageData,
	removeLocalStorageData,
	setLocalStorageData,
} from '../../src/components/Services/localStorageService';

const workoutPage = () => {
	const CURRENT_IN_PROGRESS = 'currentInProgress';
	const params = useLocalSearchParams();
	const { title, id, exercisesID } = params;

	const { exercises, progress, isPlayOn, state, dispatch, setWorkoutRecord } =
		useContext(WorkoutRecordContext) as IWorkoutRecordContext;

	const { workoutRecord: data, setWorkoutRecord: setData } =
		useContext(WorkoutRecordContext) ?? {};
	const { user } = useContext(UserContext) ?? {};

	const storeData = async (key: string, value: string) => {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (error) {
			console.log(error);
		}
	};

	const triggerNewExerciseRecord = async () => {
		await getLocalStorageData((e: any) => {
			if (e !== null || e !== undefined) {
				console.log(e);
				setWorkoutRecord(JSON.parse(e));
				return;
			}
		}, CURRENT_IN_PROGRESS);
		const record = {
			endTitme: null,
			startTime: new Date(),
			isComplete: false,
			userId: String(user?.uid),
			workoutSetId: String(id),
		} as WorkoutRecord;

		firestore().collection('workout_records').add(record);
		setLocalStorageData(CURRENT_IN_PROGRESS, record);
	};

	const fetchExercises = () => {
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
							},
						});
					});
			});

			if (!data && setData) {
				setData({
					workoutSetId: String(id),
					startTime: state.startTime || Date(),
					isComplete: false,
					endTitme: null,
				} as WorkoutRecord);
			}
		}
	};

	useEffect(() => {
		fetchExercises();
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

	const fetchAllItems = async () => {
		try {
			const keys = await AsyncStorage.getAllKeys();
			const items = await AsyncStorage.multiGet(keys);

			return items;
		} catch (error) {
			console.log(error, 'problemo');
		}
	};

	return (
		<>
			<Stack.Screen options={{ title: String(title) }} />
			<View style={styles.container}>
				<ProgressHeader
					onPressReset={() => {
						setTrainingProgressTo(false);
						dispatch({
							type: 'saveProgress',
							payload: { ...state, progress: 0 },
						});
						removeLocalStorageData(CURRENT_IN_PROGRESS);
						console.log('deleted');
					}}
					onPressStart={() => {
						dispatch({
							type: 'setIsPlayingOn',
							payload: {
								...state,
								isPlayOn: !isPlayOn,
								startTime: state.startTime || new Date(),
							},
						});
						triggerNewExerciseRecord();
					}}
					onPressPause={() => {
						dispatch({
							type: 'setIsPlayingOn',
							payload: { ...state, isPlayOn: !isPlayOn },
						});
					}}
					onPressFinish={() => {
						if (setData) {
							const newData = {
								userId: user?.uid,
								workoutSetId: String(id),
								startTime: state.startTime || new Date(),
								isComplete: true,
								endTitme: new Date(),
							} as WorkoutRecord;
							setData(newData);
							firestore().collection('workout_records').add(newData);
						}

						setTrainingProgressTo(true);
					}}
				/>
				<Button onPress={() => console.log(fetchAllItems())} title='here' />
				<Divider style={styles.divider} />
				<View
					style={{
						marginTop: 5,
					}}>
					{exercises?.length > 0 ? (
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
