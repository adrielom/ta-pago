export interface WorkoutSet {
    title: string,
    urlImage?: string,
    exercises: Array<Workout>
}

export interface Workout {
    name: string,
    sets: number,
    execution: {
        min?: number,
        max: number,
        type: 'reps' | 'time' 
    },
    cargo?: number,
    desc?: string
}

export interface User {
    name: string,
}

export interface Data {
    user: User,
    sets: WorkoutSet[]
}