import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

import { data } from '../src/info';
import WorkoutCard from '../src/components/workoutCard';
import { v4 as uuid } from 'uuid';
import 'react-native-get-random-values';

export default function App() {
	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<Stack.Screen options={{ title: 'Bem vindo(a), Fulano' }} />
			<FlatList<WorkoutSet>
				data={data.sets}
				renderItem={({ item }) => (
					<WorkoutCard key={uuid()} title={item.title} />
				)}
			/>
		</View>
	);
}
