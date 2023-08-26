import { WorkoutReducerSchema } from "./types";

export const initialState = {
	exercises: [],
	isPlayOn: false,
	progress: 0
};

export const workoutPageReducer = (
	state: WorkoutReducerSchema,
	{ type, payload }: { type: string; payload: WorkoutReducerSchema }
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
                isPlayOn : payload.isPlayOn
            }
		default:
			return state;
	}
};

