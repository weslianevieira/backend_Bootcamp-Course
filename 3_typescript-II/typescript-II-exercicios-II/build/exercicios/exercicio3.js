"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPostsPorAutor = void 0;
const posts = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
];
function buscarPostsPorAutor(autorInformado) {
    return posts.filter((post) => {
        return post.autor.toLowerCase().includes(autorInformado.toLowerCase());
    });
}
exports.buscarPostsPorAutor = buscarPostsPorAutor;
