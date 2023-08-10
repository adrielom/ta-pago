interface WorkoutSet {
    title: string,
    urlImage?: string,
    exercises: Array<Workout>
}

interface Workout {
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

interface User {
    name: string,
}

interface Data {
    user: User,
    sets: WorkoutSet[]
}