import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { WorkoutSetContext } from '../src/contexts/workoutSetContext';

const workoutPage = () => {
	const { data, setData } = useContext(WorkoutSetContext) || {};

	useEffect(() => {
		console.log(data);
	}, []);

	return (
		<View>
			<Text>workoutPage</Text>
		</View>
	);
};

export default workoutPage;
