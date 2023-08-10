import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

import { data } from '../src/info';
import WorkoutCard from '../src/components/workoutCard';
import { v4 as uuid } from 'uuid';
import 'react-native-get-random-values';
import { WorkoutSet } from '../src/info/types';

export default function App() {
	return (
		<View style={styles.centerEverything}>
			<Stack.Screen options={{ title: `Bem vindo(a), ${data.user.name}` }} />
			<View style={styles.content}>
				<Text
					style={{
						textAlign: 'center',
						marginVertical: 20,
						fontSize: 20,
					}}>
					O que vamos treinar hoje?
				</Text>
				<FlatList<WorkoutSet>
					data={data.sets}
					style={{
						marginHorizontal: 15,
						maxHeight: '85%',
					}}
					numColumns={2}
					horizontal={false}
					contentContainerStyle={{ gap: 5 }}
					columnWrapperStyle={{ gap: 15 }}
					ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
					renderItem={({ item }) => (
						<WorkoutCard key={uuid()} title={item.title} />
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
