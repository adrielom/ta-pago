import { View, Text } from 'react-native';
import React, { createContext, ReactNode, useState } from 'react';
import { WorkoutSet } from '../../info/types';
import { data as dados } from '../../info';

interface IWorkoutSetContext {
	setData: (data: WorkoutSet[]) => void;
	data: WorkoutSet[];
}

interface WorkoutSetProviderProps {
	children: ReactNode;
}

export const WorkoutSetContext = createContext<IWorkoutSetContext | null>(null);

export default function WorkoutSetProvider({
	children,
}: WorkoutSetProviderProps) {
	const [data, setData] = useState<WorkoutSet[]>(dados.sets);

	return (
		<WorkoutSetContext.Provider value={{ data, setData }}>
			{children}
		</WorkoutSetContext.Provider>
	);
}
