"use strict";
//// Array original
// const employees = [
//     { name: "Marcos", salary: 2500, sector: "marketing", inPerson: true },
//     { name: "Maria", salary: 1500, sector: "vendas", inPerson: false },
//     { name: "Salete", salary: 2200, sector: "financeiro", inPerson: true },
//     { name: "João", salary: 2800, sector: "marketing", inPerson: false },
//     { name: "Josué", salary: 5500, sector: "financeiro", inPerson: true },
//     { name: "Natalia", salary: 4700, sector: "vendas", inPerson: true },
//     { name: "Paola", salary: 3500, sector: "marketing", inPerson: true }
// ]
var SECTOR;
(function (SECTOR) {
    SECTOR["MARKETING"] = "marketing";
    SECTOR["SALES"] = "vendas";
    SECTOR["FINANCIAL"] = "financeiro";
})(SECTOR || (SECTOR = {}));
// Adaptação com ENUM
const employees = [
    { name: "Marcos", salary: 2500, sector: SECTOR.MARKETING, inPerson: true },
    { name: "Maria", salary: 1500, sector: SECTOR.SALES, inPerson: false },
    { name: "Salete", salary: 2200, sector: SECTOR.FINANCIAL, inPerson: true },
    { name: "João", salary: 2800, sector: SECTOR.MARKETING, inPerson: false },
    { name: "Josué", salary: 5500, sector: SECTOR.FINANCIAL, inPerson: true },
    { name: "Natalia", salary: 4700, sector: SECTOR.SALES, inPerson: true },
    { name: "Paola", salary: 3500, sector: SECTOR.MARKETING, inPerson: true }
];
function selectedEmployees(employees) {
    const employeesFiltered = employees.filter(e => e.sector === SECTOR.MARKETING && e.inPerson);
    return employeesFiltered;
}
console.log(selectedEmployees(employees));
// [
//     { name: 'Marcos', salary: 2500, sector: 'marketing', inPerson: true },
//     { name: 'Paola', salary: 3500, sector: 'marketing', inPerson: true }
// ]
