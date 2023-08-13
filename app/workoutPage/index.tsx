import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { Divider, ProgressBar, Surface } from 'react-native-paper';
import ExerciseSetItem from '../../src/components/ExerciseSetItem';
import RoundButton from '../../src/components/shared/roundButton';
import { NavigationContext } from '../../src/contexts/navigationContext';
import { WorkoutSetContext } from '../../src/contexts/workoutSetContext';
import { Workout } from '../../src/info/types';
import { paramsStyles, styles } from './styles';
import { paramsStyle } from '../../src/components/shared/progressBarComponent/styles';

const workoutPage = () => {
	const { data, setData } = useContext(WorkoutSetContext) || {};
	const { navigationInfo, setNavigationInfo } =
		useContext(NavigationContext) || {};

	const [exercises, setExercises] = useState<Workout[]>([]);
	const [total, setTotal] = useState(4);
	const [progress, setProgress] = useState(50);

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
				return <Text> 😀</Text>;
			case prog >= 100:
				return <Text> 😁</Text>;
			default:
				break;
		}
	};

	useEffect(() => {
		if (data && params && setNavigationInfo) {
			const set = data.filter((ex) => ex.id === Number(id));
			setExercises(set[0].exercises);
			setNavigationInfo({ workoutSetSelectedID: Number(id) });
			setTotal(set[0].exercises.length);
		}
	}, []);

	useEffect(() => {
		console.log('first');
		if (data) {
			const workout = data.find((el) => el.id === Number(id));
			const allComplete = workout?.exercises.filter(
				(el) => el.isComplete === true
			);
			if (allComplete && allComplete?.length > 0) {
				setProgress(allComplete.length);
				console.log(`${total} - ${progress} - ${formattedProgress()}`);
			}
		}
	}, [data]);

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
						<RoundButton iconName='refresh' onPress={() => setProgress(0)} />
						<RoundButton iconName='check-bold' onPress={() => {}} />
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
						renderItem={({ item }) => <ExerciseSetItem workout={item} />}
					/>
				</View>
			</View>
		</>
	);
};

export default workoutPage;
