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
            urlImage: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/04/iStock-1246046696.jpg',
            exercises: [
                {
                    id: 0,
                    isComplete: false,
                    name: "Supino inclinado halteres",
                    urlImage: 'https://static.movimente.me/media/imgs/exercises/img_192.jpeg',
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
                    urlImage: 'https://i.ytimg.com/vi/ZfFYoFzSyRA/maxresdefault.jpg',
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
                    urlImage: 'https://www.intowellness.in/wp-content/uploads/2019/12/Pec-Fly-Machine.jpg',
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
                    urlImage: 'https://i.ytimg.com/vi/1N43ZJT7yiM/maxresdefault.jpg',
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
                    urlImage: 'https://blog.blackskullusa.com.br/wp-content/uploads/2021/12/rosca-direta-inclinada-interna.jpg',
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
                    urlImage: 'https://i.ytimg.com/vi/mfkfUkj24co/maxresdefault.jpg',
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
                    urlImage: 'https://blog.gsuplementos.com.br/wp-content/uploads/2022/09/prancha-exercicio.jpg',
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
        {
            id: 1,
            title: "B - Costas e Ombro",
            isComplete: false,
            urlImage: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/04/iStock-1246046696.jpg',
            exercises: [
                {
                    id: 0,
                    isComplete: false,
                    name: "Remada articulada máquina",
                    urlImage: 'https://static.movimente.me/media/imgs/exercises/img_192.jpeg',
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
                    name: "Remada sentado",
                    urlImage: 'https://i.ytimg.com/vi/ZfFYoFzSyRA/maxresdefault.jpg',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Progredir Carga"
                },
                {
                    id: 2,
                    isComplete: false,
                    name: "Remada Cavalinho",
                    urlImage: 'https://www.intowellness.in/wp-content/uploads/2019/12/Pec-Fly-Machine.jpg',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 3,
                    isComplete: false,
                    name: "Puxada Frontal",
                    urlImage: 'https://i.ytimg.com/vi/1N43ZJT7yiM/maxresdefault.jpg',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 4,
                    isComplete: false,
                    urlImage: 'https://blog.blackskullusa.com.br/wp-content/uploads/2021/12/rosca-direta-inclinada-interna.jpg',
                    name: "Pulldown",
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
                    name: "Abs nas Paralelas",
                    urlImage: 'https://i.ytimg.com/vi/mfkfUkj24co/maxresdefault.jpg',
                    execution: {
                        min: 15,
                        max: 20,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 6,
                    isComplete: false,
                    name: "Abs supra curto",
                    urlImage: 'https://blog.gsuplementos.com.br/wp-content/uploads/2022/09/prancha-exercicio.jpg',
                    execution: {
                        min: 15,
                        max: 20,
                        type: 'reps'
                    },
                    sets: 4,
                }
            ]
        },
        {
            id: 2,
            title: "C - Leg Day",
            isComplete: false,
            urlImage: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/04/iStock-1246046696.jpg',
            exercises: [
                {
                    id: 0,
                    isComplete: false,
                    name: "Cadeira Flexora",
                    urlImage: 'https://static.movimente.me/media/imgs/exercises/img_192.jpeg',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Progredir Carga. Série de aquecimento 20 reps. Peso leve"
                },
                {
                    id: 1,
                    isComplete: false,
                    name: "Flexora Deitada",
                    urlImage: 'https://i.ytimg.com/vi/ZfFYoFzSyRA/maxresdefault.jpg',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Série de aquecimento"
                },
                {
                    id: 2,
                    isComplete: false,
                    name: "Stiff barra ou Anilha",
                    urlImage: 'https://www.intowellness.in/wp-content/uploads/2019/12/Pec-Fly-Machine.jpg',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Última série até a falha"
                },
                {
                    id: 3,
                    isComplete: false,
                    name: "Cadeira Extensora",
                    urlImage: 'https://i.ytimg.com/vi/1N43ZJT7yiM/maxresdefault.jpg',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 4,
                    isComplete: false,
                    urlImage: 'https://blog.blackskullusa.com.br/wp-content/uploads/2021/12/rosca-direta-inclinada-interna.jpg',
                    name: "Agachamento Anilha",
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
                    name: "Leg Press 45º",
                    urlImage: 'https://i.ytimg.com/vi/mfkfUkj24co/maxresdefault.jpg',
                    execution: {
                        min: 15,
                        max: 20,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: 'Última série até a falha'
                },
                {
                    id: 6,
                    isComplete: false,
                    name: "Afundo com Halteres",
                    urlImage: 'https://blog.gsuplementos.com.br/wp-content/uploads/2022/09/prancha-exercicio.jpg',
                    execution: {
                        min: 15,
                        max: 20,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: 'Duas últimas séries até a falha'
                }
            ]
        },
        {
            id: 3,
            title: "D - Ombro e Tríceps",
            isComplete: false,
            urlImage: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/04/iStock-1246046696.jpg',
            exercises: [
                {
                    id: 0,
                    isComplete: false,
                    name: "Ombro Lateral Halteres",
                    urlImage: 'https://static.movimente.me/media/imgs/exercises/img_192.jpeg',
                    execution: {
                        min: 10,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 1,
                    isComplete: false,
                    name: "Ombro frontal Halteres",
                    urlImage: 'https://i.ytimg.com/vi/ZfFYoFzSyRA/maxresdefault.jpg',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Série de aquecimento"
                },
                {
                    id: 2,
                    isComplete: false,
                    name: "Desenvolvimento halteres",
                    urlImage: 'https://www.intowellness.in/wp-content/uploads/2019/12/Pec-Fly-Machine.jpg',
                    execution: {
                        min: 10,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Última série até a falha"
                },
                {
                    id: 3,
                    isComplete: false,
                    name: "Ombro lateral polia",
                    urlImage: 'https://i.ytimg.com/vi/1N43ZJT7yiM/maxresdefault.jpg',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Últimas duas séries até a falha"
                },
                {
                    id: 4,
                    isComplete: false,
                    urlImage: 'https://blog.blackskullusa.com.br/wp-content/uploads/2021/12/rosca-direta-inclinada-interna.jpg',
                    name: "Tríceps corda polia",
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
                    name: "Tríceps francês polia",
                    urlImage: 'https://i.ytimg.com/vi/mfkfUkj24co/maxresdefault.jpg',
                    execution: {
                        min: 10,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: 'Última série até a falha'
                },
                {
                    id: 6,
                    isComplete: false,
                    name: "Tríceps testa polia",
                    urlImage: 'https://blog.gsuplementos.com.br/wp-content/uploads/2022/09/prancha-exercicio.jpg',
                    execution: {
                        max:8,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: 'Última série até a falha'
                }
            ]
        },
    ]
} as Data

