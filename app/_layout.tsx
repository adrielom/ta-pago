import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { palette } from '../constants/Colors';
import NavigationProvider from '../src/contexts/navigationContext';
import WorkoutRecordProvider from '../src/contexts/workoutSetContext';
import { UserProvider } from '../src/contexts/userContext';

const defaultOptions: NativeStackNavigationOptions = {
	headerStyle: { backgroundColor: `${palette.tomato.default}` },
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold',
	},
};

export default function StackLayout() {
	return (
		<PaperProvider>
			<UserProvider>
				<WorkoutRecordProvider>
					<NavigationProvider>
						<Stack>
							<Stack.Screen name='workoutPage/index' options={defaultOptions} />
							<Stack.Screen name='index' options={defaultOptions} />
							<Stack.Screen name='home' options={defaultOptions} />
						</Stack>
					</NavigationProvider>
				</WorkoutRecordProvider>
			</UserProvider>
		</PaperProvider>
	);
}
