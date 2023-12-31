import React, { useContext, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { IconButton, Surface } from 'react-native-paper';
import {
	IWorkoutRecordContext,
	WorkoutRecordContext,
} from '../../contexts/workoutSetContext';
import { Workout } from '../../info/types';
import ProgressBarComponent from '../shared/progressBarComponent';
import { styles } from './styles';

type ExerciseSetItemProps = {
	workout: Workout;
};

export default function ExerciseSetItem({ workout }: ExerciseSetItemProps) {
	const [showPhoto, setShowPhoto] = useState(false);

	const { isPlayOn, dispatch, state, progress } = useContext(
		WorkoutRecordContext
	) as IWorkoutRecordContext;

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

	const setComplete = (id: string) => {
		dispatch({
			type: 'setExerciseSetDone',
			payload: {
				...state,
				id,
				progress: progress + 1,
			},
		});
	};

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
			{isPlayOn && (
				<ProgressBarComponent
					total={workout.sets}
					inicialValue={workout.isComplete ? workout.sets : 0}
					onComplete={() => {
						setComplete(workout.id);
					}}
				/>
			)}
		</Surface>
	);
}
