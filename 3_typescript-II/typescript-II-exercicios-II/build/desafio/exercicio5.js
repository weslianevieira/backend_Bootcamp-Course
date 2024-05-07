"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordenarConsultasPorNome = void 0;
const consultas = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
];
function ordenarConsultasPorNome() {
    return consultas.sort((a, b) => a.nome.localeCompare(b.nome));
}
exports.ordenarConsultasPorNome = ordenarConsultasPorNome;
