import { Data } from "./types";

export const data = {
    user: {
        name: 'Adriel',
        id: '0'
    },
    sets: [
        {
            id: '0',
            title: "A - Superiores",
            isComplete: false,
            urlImage: 'https://static.movimente.me/media/imgs/exercises/img_192.jpeg',
            exercises: [
                {
                    id: 'rVr6x7qE4OH9QGvOkpiP',
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
                    id: 'WFmg1qIFv8yP7mRC2SGL',
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
                    id: '5iHtT73dwtWG0zSgbFPP',
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
                    id: '7jT9XW2ABXSYE7yuoScR',
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
                    id: 'tUzt6WA9jo7dVCliu2Qk',
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
                    id: '2JtqMs7qsuvDU9EHxaiK',
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
                    id: 'iT3OA8YGya7wUGRDpoZi',
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
            id: '1',
            title: "B - Costas e Ombro",
            isComplete: false,
            urlImage: 'https://www.hipertrofia.org/blog/wp-content/uploads/2019/05/remada-articulada.jpg',
            exercises: [
                {
                    id: 'DeZ5qCx1KicKcHvBucZs',
                    isComplete: false,
                    name: "Remada articulada máquina",
                    urlImage: 'https://www.hipertrofia.org/blog/wp-content/uploads/2019/05/remada-articulada.jpg',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Progredir Carga"
                },
                {
                    id: 'HVy9Q65GAqKXaF9KClZG',
                    isComplete: false,
                    name: "Remada sentado",
                    urlImage: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Progredir Carga"
                },
                {
                    id: 'SFKXPLyuWGIbyJxCiGXp',
                    isComplete: false,
                    name: "Remada Cavalinho",
                    urlImage: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-em-pe-com-barra-T.gif',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 'AjBOVYUyZiXpPmop50Au',
                    isComplete: false,
                    name: "Puxada Frontal",
                    urlImage: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 'iClWpyWivRhjhNao44sB',
                    isComplete: false,
                    urlImage: 'https://i.pinimg.com/originals/74/68/5a/74685a8a1b44b902c9d3ac1404844e88.gif',
                    name: "Pulldown",
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 'gY4JK2VuZ1sTggLWrMkL',
                    isComplete: false,
                    name: "Abs nas Paralelas",
                    urlImage: 'https://media.tenor.com/DS2odwIdTHcAAAAM/abdominal-workout-knee.gif',
                    execution: {
                        min: 15,
                        max: 20,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 'BwSd1edegPGVzxS19r6E',
                    isComplete: false,
                    name: "Abs supra curto",
                    urlImage: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/abdominal.gif',
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
            id: '2',
            title: "C - Leg Day",
            isComplete: false,
            urlImage: 'https://boaforma.abril.com.br/wp-content/uploads/sites/2/2023/04/cadeira-flexora.jpg?quality=90&strip=info',
            exercises: [
                {
                    id: 'xHw3pTfuDQtur2rnlAWz',
                    isComplete: false,
                    name: "Cadeira Flexora",
                    urlImage: 'https://cdn.fisiculturismo.com.br/monthly_2017_03/cadeira-flexora-animacao.gif.90e391e83229726537404de3a3af9104.gif',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Progredir Carga. Série de aquecimento 20 reps. Peso leve"
                },
                {
                    id: 'IQEbwAegXb4EE744o4Tp',
                    isComplete: false,
                    name: "Flexora Deitada",
                    urlImage: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/pernas-flexao-de-pernas-na-maquina.gif',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Série de aquecimento"
                },
                {
                    id: 'vGVH5JskluaKRfxW0JAE',
                    isComplete: false,
                    name: "Stiff barra ou Anilha",
                    urlImage: 'https://s.zst.com.br/cms-assets/2022/05/stiff-como-fazer.webp',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Última série até a falha"
                },
                {
                    id: 'HN8VVCiRJCrztpe8yxWD',
                    isComplete: false,
                    name: "Cadeira Extensora",
                    urlImage: 'https://cdn.fisiculturismo.com.br/monthly_2017_03/cadeira-extensora-animacao.gif.c205cc7aabd68be33a9686238eb54826.gif',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 'KA5l6UyJlNNJzr7jk30B',
                    isComplete: false,
                    urlImage: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/agachamento-taca-goblet-com-harter.gif',
                    name: "Agachamento Anilha",
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 'aaWt05icMYKhS0X90s4I',
                    isComplete: false,
                    name: "Leg Press 45º",
                    urlImage: 'https://media.tenor.com/e0qeS17dv7QAAAAC/legpress45-leg-press.gif',
                    execution: {
                        min: 15,
                        max: 20,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: 'Última série até a falha'
                },
                {
                    id: 'GH8eq1qbzoIha0oghXOj',
                    isComplete: false,
                    name: "Afundo com Halteres",
                    urlImage: 'https://cdn.fisiculturismo.com.br/monthly_2020_05/afundo-com-halter-animacao.gif.584f3c12e15e72cd6895460a20863049.gif',
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
            id: '3',
            title: "D - Ombro e Tríceps",
            isComplete: false,
            urlImage: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif',
            exercises: [
                {
                    id: 'p2duMnAlKA7eWI25YBOK',
                    isComplete: false,
                    name: "Ombro Lateral Halteres",
                    urlImage: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-elevacao-lateral-de-ombros-com-halteres.gif',
                    execution: {
                        min: 10,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 'ZU5iXbvnXaFM1fUOfZm7',
                    isComplete: false,
                    name: "Ombro frontal Halteres",
                    urlImage: 'https://i.ytimg.com/vi/RUzWF4aDt7g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCigEIjaOx6IHMfnvYSd_BDyzsrqQ',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Série de aquecimento"
                },
                {
                    id: 'bjlXYmrE6XTeFHTRhWIZ',
                    isComplete: false,
                    name: "Desenvolvimento halteres",
                    urlImage: 'https://i.pinimg.com/originals/c6/01/50/c60150e82887c5f20f8659a2ec943c1a.gif',
                    execution: {
                        min: 10,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Última série até a falha"
                },
                {
                    id: 'GIfqiP230vczuKiwLua2',
                    isComplete: false,
                    name: "Ombro lateral polia",
                    urlImage: 'https://i.makeagif.com/media/11-19-2016/UTaLoY.gif',
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: "Últimas duas séries até a falha"
                },
                {
                    id: 'uRQZ5FAfMkfN8a8dBbCy',
                    isComplete: false,
                    urlImage: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley-com-corda.gif',
                    name: "Tríceps corda polia",
                    execution: {
                        min: 8,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                },
                {
                    id: 'NHOZQtCSrizjJ0lUH4ws',
                    isComplete: false,
                    name: "Tríceps francês polia",
                    urlImage: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-no-pulley-atras-ca-cabeca.gif',
                    execution: {
                        min: 10,
                        max: 12,
                        type: 'reps'
                    },
                    sets: 4,
                    desc: 'Última série até a falha'
                },
                {
                    id: 'fQEdS2971wXWPOWxF6B5',
                    isComplete: false,
                    name: "Tríceps testa polia",
                    urlImage: 'https://cdn.fisiculturismo.com.br/monthly_2017_03/triceps-testa-na-polia-animacao.gif.8c2d0a3241e8a6156e46efcf3515b216.gif',
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

