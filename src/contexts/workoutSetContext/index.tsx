import { View, Text } from 'react-native';
import React, { createContext, ReactNode, useReducer, useState } from 'react';
import { Workout, WorkoutRecord, WorkoutSet } from '../../info/types';
import { data as dados } from '../../info';
import {
	WorkoutReducerSchemaTypes,
	initialState,
	workoutPageReducer,
} from '../../../app/workoutPage/reducer';
import { WorkoutReducerSchema } from '../../../app/workoutPage/types';

interface IWorkoutRecordContext {
	setWorkoutRecord: (data: WorkoutRecord) => void;
	workoutRecord: WorkoutRecord | null;
	exercises: Workout[];
	progress: number;
	dispatch: React.Dispatch<{
		type: WorkoutReducerSchemaTypes;
		payload: WorkoutReducerSchema;
	}>;
	isPlayOn: boolean;
}

interface WorkoutRecordProviderProps {
	children: ReactNode;
}

export const WorkoutRecordContext = createContext<IWorkoutRecordContext | null>(
	null
);

export default function WorkoutRecordProvider({
	children,
}: WorkoutRecordProviderProps) {
	const [workoutRecord, setWorkoutRecord] = useState<WorkoutRecord | null>(
		null
	);
	const [state, dispatch] = useReducer(workoutPageReducer, initialState);
	const { exercises, progress, isPlayOn } = state;

	return (
		<WorkoutRecordContext.Provider
			value={{
				workoutRecord,
				setWorkoutRecord,
				exercises,
				progress,
				isPlayOn,
				dispatch,
			}}>
			{children}
		</WorkoutRecordContext.Provider>
	);
}
