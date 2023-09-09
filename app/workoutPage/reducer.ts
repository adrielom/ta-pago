import { WorkoutReducerSchema } from "./types";

export const initialState = {
	exercises: [],
	isPlayOn: false,
	progress: 0,
	startTime: null,
	endTime: null
} as WorkoutReducerSchema;


export type WorkoutReducerSchemaTypes = 'saveExercises' | 'saveProgress' | 'setIsPlayingOn';

export const workoutPageReducer = (
	state: WorkoutReducerSchema,
	{ type, payload }: { type: WorkoutReducerSchemaTypes; payload: WorkoutReducerSchema }
) => {
	switch (type) {
		case 'saveExercises':
			return {
				...state,
				exercises: [...payload.exercises],
			};
        case 'saveProgress': 
            return {
                ...state,
                progress: payload.progress
            }
        case 'setIsPlayingOn':
            return {
                ...state,
                isPlayOn : payload.isPlayOn,
				startTime: payload.startTime || state.startTime	
            }
		default:
			return state;
	}
};

