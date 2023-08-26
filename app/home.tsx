import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import 'react-native-get-random-values';
import { Menu } from 'react-native-paper';
import { v4 as uuid } from 'uuid';
import WorkoutCard from '../src/components/workoutCard';
import { data } from '../src/info';
import { WorkoutSet } from '../src/info/types';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function App() {
	const [toggleMoreButton, setToggleMoreButton] = useState(false);
	const [workoutSets, setWorkoutSets] = useState<WorkoutSet[]>([]);

	useEffect(() => {
		const getAllSets = firestore()
			.collection('user_workout_sets')
			.where('isActive', '==', true)
			.get();
		const getAllWorkouts = firestore().collection('workout_sets').get();

		Promise.all([getAllSets, getAllWorkouts]).then((response) => {
			response[0].docs.forEach((e) => {
				const setsIds: string[] = e.get('sets');
				if (setsIds !== null) {
					const tempSets = setsIds.map((_id) => {
						const set = response[1].docs.find((doc) => doc.id === _id);
						return {
							id: _id,
							...set?.data(),
						} as WorkoutSet;
					});
					setWorkoutSets(tempSets);
				}
			});
		});
	}, []);

	return (
		<View style={styles.centerEverything}>
			<Stack.Screen
				options={{
					title: `Bem vindo(a), ${data.user.name}`,
					headerShown: true,
					headerRight: () => (
						<>
							<Menu
								anchor={
									<TouchableOpacity
										onPress={() => setToggleMoreButton((prev) => !prev)}>
										<Feather size={20} color={'white'} name='more-vertical' />
									</TouchableOpacity>
								}
								onDismiss={() => setToggleMoreButton(false)}
								visible={toggleMoreButton}>
								<Menu.Item
									onPress={() => {
										setToggleMoreButton(false);
										auth()
											.signOut()
											.then(() => setToggleMoreButton(false));
									}}
									title='Sair'
								/>
							</Menu>
						</>
					),
				}}
			/>
			<View style={styles.content}>
				<Text
					style={{
						textAlign: 'center',
						marginVertical: 20,
						fontSize: 20,
					}}>
					Bora pagar o que hoje?
				</Text>
				<FlatList<WorkoutSet>
					data={workoutSets.sort((workoutA, workoutB) =>
						workoutA.title > workoutB.title ? 1 : -1
					)}
					style={{
						maxHeight: '92%',
					}}
					horizontal={false}
					ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
					renderItem={({ item }) => (
						<>
							<Text></Text>
							<WorkoutCard
								imgUrl={item.urlImage}
								key={uuid()}
								title={item.title}
								id={item.id}
								exercises={item.exercises}
							/>
						</>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	centerEverything: {
		justifyContent: 'center',
	},
	content: {
		width: '100%',
		marginHorizontal: 'auto',
	},
});
