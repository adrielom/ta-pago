export interface WorkoutSet {
	id: string;
	title: string;
	urlImage?: string;
	exercises: Array<string>;
}

export interface WorkoutRecord {
	userId: string;
	workoutSetId: string;
	startTime: Date | null;
	endTitme: Date | null;
	isComplete: boolean;
}

export interface Workout {
	id: string;
	urlImage: string;
	isComplete: boolean;
	name: string;
	sets: number;
	execution: {
		min?: number;
		max: number;
		type: 'reps' | 'time';
	};
	cargo?: number;
	desc?: string;
}

export interface User {
	name: string;
	id: string;
}

export interface Data {
	user: User;
	sets: WorkoutSet[];
}
