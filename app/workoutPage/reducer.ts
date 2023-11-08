import { Workout } from "../../src/info/types";

export type WorkoutReducerSchemaTypes = 'saveExercises' | 'saveProgress' | 'setIsPlayingOn' | 'setExerciseSetDone';

export const workoutPageReducer = (
	state: any,
	{ type, payload }: { type: WorkoutReducerSchemaTypes; payload: any }
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
				startTime: payload.startTime || state.startTime,
            }
		case 'setExerciseSetDone':
			return {
				...state,
				exercisesDone: [...state.exercisesDone, state.exercises.filter((e: Workout) => e.id === payload.id)],
				progress: payload.progress,
				finishTime: payload.workoutTime
			}
		default:
			return state;
	}
};

