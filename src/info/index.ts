import { Data } from "./types";

export const data = {
    user: {
        name: 'Adriel',
        id: 0
    },
    sets: [
        {
            id: 0,
            title: "A - Superiores",
            isComplete: false,
            exercises: [
                {
                    id: 0,
                    isComplete: false,
                    name: "Supino inclinado halteres",
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Progredir Carga"
                },
                {
                    id: 1,
                    isComplete: false,
                    name: "Supino Reto Articulado",
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 2,
                    isComplete: false,
                    name: "Peck Fly",
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Falha, entre 10 e 15"
                },
                {
                    id: 3,
                    isComplete: false,
                    name: "Biceps Barra W",
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Progredir Carga"
                },
                {
                    id: 4,
                    isComplete: false,
                    name: "Biceps Rosca no Banco",
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 5,
                    isComplete: false,
                    name: "Abs Supra Curto",
                    execution: {
                        max: 10,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 6,
                    isComplete: false,
                    name: "Abs Prancha",
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'time'
                    },
                    sets: 4,
                    desc: "Progredir Carga"
                }
            ]
        },
    ]
} as Data

