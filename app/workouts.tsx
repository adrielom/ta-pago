import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function Workouts() {
	return (
		<View>
			<Stack.Screen
				options={{
					title: 'My home',
					headerStyle: { backgroundColor: '#f4511e' },
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			/>
			<Text>Workouts</Text>
		</View>
	);
}
