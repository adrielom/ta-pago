import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Link } from 'expo-router';
import { palette } from '../constants/Colors';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import WorkoutSetProvider from '../src/contexts/workoutSetContext';

const defaultOptions: NativeStackNavigationOptions = {
	headerStyle: { backgroundColor: `${palette.tomato.default}` },
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold',
	},
};

export default function StackLayout() {
	return (
		<WorkoutSetProvider>
			<Stack>
				<Stack.Screen name='workouts' options={defaultOptions} />
				<Stack.Screen name='index' options={defaultOptions} />
			</Stack>
		</WorkoutSetProvider>
	);
}
