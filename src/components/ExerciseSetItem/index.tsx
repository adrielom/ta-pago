import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { IconButton, Modal, Portal, Surface } from 'react-native-paper';
import { Workout, WorkoutSet } from '../../info/types';
import ProgressBarComponent from '../shared/progressBarComponent';
import { styles } from './styles';
import { WorkoutSetContext } from '../../contexts/workoutSetContext';
import { NavigationContext } from '../../contexts/navigationContext';

type ExerciseSetItemProps = {
	workout: Workout;
};

export default function ExerciseSetItem({ workout }: ExerciseSetItemProps) {
	const [showPhoto, setShowPhoto] = useState(false);
	const { navigationInfo, setNavigationInfo } =
		useContext(NavigationContext) || {};

	const repsTextFormatted = () => {
		return `
		${workout.sets} x ${
			workout.execution.min ? workout.execution.min + ' -' : ''
		} ${workout.execution.max}${
			workout.execution.type === 'time'
				? ' seconds'
				: ' ' + workout.execution.type
		}${workout.cargo ? '\n\t\t' + workout.cargo : ''}${
			workout.desc ? '\n\t\t' + workout.desc : ''
		}
		`;
	};

	const setComplete = () => {};

	return (
		<Surface style={styles.surface}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>{workout.name}</Text>
				<IconButton
					icon={!showPhoto ? 'arrow-down-drop-circle' : 'close'}
					onPress={() => setShowPhoto((prev) => !prev)}
				/>
			</View>
			<View>
				{showPhoto && (
					<Image source={{ uri: workout.urlImage }} style={styles.image} />
				)}
				<View style={styles.repsTextContainer}>
					<Text style={styles.repsText}>{repsTextFormatted()}</Text>
				</View>
			</View>
			<ProgressBarComponent
				total={workout.sets}
				inicialValue={workout.isComplete ? workout.sets : 0}
				onComplete={() => {
					setComplete();
				}}
			/>
		</Surface>
	);
}
