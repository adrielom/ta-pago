import { Workout } from "../../info/types";

export type WorkoutCardProps = {
    imgUrl?: string,
    title: string;
    id: string, 
    exercises: string[]
}

export type WorkoutCardDTO  = {
    title: string,
    id: string,
    exercisesID: string
}