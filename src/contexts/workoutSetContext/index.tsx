import React, { ReactNode, createContext, useReducer, useState } from 'react';
import {
	WorkoutReducerSchemaTypes,
	workoutPageReducer,
} from '../../../app/workoutPage/reducer';
import { Workout, WorkoutRecord } from '../../info/types';

export interface IWorkoutRecordContext {
	setWorkoutRecord: (data: WorkoutRecord) => void;
	workoutRecord: WorkoutRecord | null;
	exercises: Workout[];
	progress: number;
	dispatch: React.Dispatch<{
		type: WorkoutReducerSchemaTypes;
		payload: any;
	}>;
	isPlayOn: boolean;
	state: any;
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
	const [state, dispatch] = useReducer(workoutPageReducer, {
		exercises: [],
		exercisesDone: [],
		progress: 0,
		isPlayOn: false,
		startTime: null,
		endTime: null,
	});
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
				state,
			}}>
			{children}
		</WorkoutRecordContext.Provider>
	);
}
