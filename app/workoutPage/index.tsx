import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { Divider, Surface } from 'react-native-paper';
import ExerciseSetItem from '../../src/components/ExerciseSetItem';
import ProgressBarComponent from '../../src/components/shared/progressBarComponent';
import RoundButton from '../../src/components/shared/roundButton';
import { WorkoutSetContext } from '../../src/contexts/workoutSetContext';
import { Workout } from '../../src/info/types';
import { styles } from './styles';
import {
	NavigationContext,
	NavigationInfoProps,
} from '../../src/contexts/navigationContext';

const workoutPage = () => {
	const { data, setData } = useContext(WorkoutSetContext) || {};
	const { navigationInfo, setNavigationInfo } =
		useContext(NavigationContext) || {};

	const [exercises, setExercises] = useState<Workout[]>([]);
	const [total, setTotal] = useState(4);
	const params = useLocalSearchParams();
	const { title, id } = params;

	useEffect(() => {
		if (data && params && setNavigationInfo) {
			const set = data.filter((ex) => ex.id === Number(id));
			setExercises(set[0].exercises);
			setNavigationInfo({ workoutSetSelectedID: Number(id) });
		}
	}, []);

	useEffect(() => {
		if (data) {
			const workout = data.find((el) => el.id === Number(id));
			const all = workout?.exercises.map((el) => {
				if (el.isComplete === true) {
					return el;
				}
			});
			if (all) {
				setTotal(all.length);
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
						<Text style={styles.emoji}>😀</Text>
						<ProgressBarComponent
							width={Dimensions.get('window').width - 35}
							showButtons={false}
							total={total}
							onComplete={() => {}}
						/>
					</View>
					<View style={styles.headerTop}>
						<RoundButton iconName='refresh' onPress={() => {}} />
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
						contentContainerStyle={{ paddingBottom: 100 }}
						renderItem={({ item }) => <ExerciseSetItem workout={item} />}
					/>
				</View>
			</View>
		</>
	);
};

export default workoutPage;
