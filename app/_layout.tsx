import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Link } from 'expo-router';
import { palette } from '../constants/Colors';

export default function StackLayout() {
	return (
		<Stack>
			<Stack.Screen
				name='workouts'
				options={{
					headerStyle: { backgroundColor: palette['Burnt orange'] },
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			/>
			<Stack.Screen
				name='index'
				options={{
					headerStyle: { backgroundColor: palette['Burnt orange'] },
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			/>
		</Stack>
	);
}
