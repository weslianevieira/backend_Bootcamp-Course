import { TPost, TUser } from "./type";

export const users: TUser[] = [
    {
        id: "abcd",
        name: "Pam Beesly",
        phone: +12462561848,
        email: "pambes@hotmail.com",
        website: "pambeesly.com"
    },
    {
        id: "efgh",
        name: "Michael Scott",
        phone: +12843002065,
        email: "mich@gmail.com",
        website: "theamazingmich.com"
    },
    {
        id: "ijkl",
        name: "Jim Halpert",
        phone: +14415606185,
        email: "halpert@gmail.com",
        website: "jimmy.com"
    },
]

export const posts: TPost[] = [
    {
        userId: "abcd",
        id: 1,
        title: "Pensamentos de uma escrivaninha",
        body: "Então, enquanto estou aqui, olhando para a tela do meu computador, percebo que minha caneca de café está vazia novamente. Coincidência? Acho que não. É como se o café evaporasse magicamente sempre que estou prestes a dar uma pausa. Bem, voltando ao trabalho... depois de uma rápida visita à máquina de café!"
    },
    {
        userId: "ijkl",
        id: 2,
        title: "Observações de um brincalhão",
        body: "Então, enquanto eu estava sentado aqui, tentando parecer ocupado, percebi algo interessante. Parece que a impressora da copiadora tem um senso de humor próprio. Sempre que você mais precisa dela, ela decide tirar uma soneca. Deve ser por isso que é chamada de 'impressora a laser', porque parece que só funciona quando é atingida com um feixe de luz cósmica. Bem, hora de tentar novamente despertar o espírito da impressora. Ou talvez seja hora de um café. Decisões, decisões..."
    },
    {
        userId: "efgh",
        id: 3,
        title: "Pensamentos do Grande Chefe",
        body: "Bem, aqui estou eu, o mestre do universo, mergulhando no oceano da produtividade. Enquanto eu me aventuro por estas águas turbulentas, percebo que o teclado do meu computador é como um piano de escritório. Cada tecla é uma nota, e eu sou o maestro desta sinfonia de trabalho. Mas, às vezes, é como se minhas ideias fossem as notas erradas e o meu teclado estivesse desafinado. Talvez eu deva chamar um pianista para ajustar isso. Ou melhor ainda, um técnico de informática! Claro, porque quem precisa de notas certas quando você tem uma equipe para consertar tudo?"
    }
]