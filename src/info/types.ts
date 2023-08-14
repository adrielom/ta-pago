export interface WorkoutSet {
    id: number,
    title: string,
    urlImage?: string,
    exercises: Array<Workout>,
    isComplete: boolean
}

export interface Workout {
    id: number,
    urlImage: string,
    isComplete: boolean,
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
    id: number
}

export interface Data {
    user: User,
    sets: WorkoutSet[]
}