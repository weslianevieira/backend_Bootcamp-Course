"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imprintGreeting2 = exports.imprintGreeting = void 0;
// Usando .slice
function imprintGreeting(name, birthDate) {
    const day = birthDate.slice(0, 2);
    const month = birthDate.slice(3, 5);
    const year = birthDate.slice(6);
    // console.log(day)
    // console.log(month)
    // console.log(year)
    return `Òla me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}. `;
}
exports.imprintGreeting = imprintGreeting;
// Usando split
function imprintGreeting2(name, birthDate) {
    const arr = birthDate.split("/");
    // const [day, month, year] = birthDate.split("/")
    console.log(arr);
    const day = arr[0];
    const month = arr[1];
    const year = arr[2];
    return `Òla me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}. `;
}
exports.imprintGreeting2 = imprintGreeting2;
//  separa data string utilizando slice
console.log(imprintGreeting('Joana', '14/11/1996'));
// Òla me chamo Joana, nasci no dia 14 do mês de 11 do ano de 1996.
// separa data strig utilizando split
console.log(imprintGreeting2('Marcos', '01/02/1941'));
// Òla me chamo Marcos, nasci no dia 01 do mês de 02 do ano de 1941.
