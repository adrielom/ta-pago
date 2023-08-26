import { Workout } from "../../src/info/types";

export type WorkoutReducerSchema = {
	exercises: Workout[];
    progress: number,
    isPlayOn: boolean
};
