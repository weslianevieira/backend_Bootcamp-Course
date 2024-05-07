import { countries } from "./countries.js"


const findCountry = (inputCountry) => {
    const  pais = countries.find((pais) => {
        // expressão com chaves deve vir com return
       return pais.name.toLowerCase() === inputCountry.toLowerCase()
    })

    return "O país é ", pais
}

console.log(findCountry(process.argv[2]))
// { name: 'Brazil', code: 'BR' }
console.table(findCountry(process.argv[2]))
// ┌─────────┬──────────┐
// │ (index) │ Values   │
// ├─────────┼──────────┤
// │ name    │ 'Brazil' │
// │ code    │ 'BR'     │
// └─────────┴──────────┘

// node pratica2 pais
// node pratica2 Brazil

// Pelo script
// npm run pratica2
// { name: 'Chile', code: 'CL' }
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │ name    │ 'Chile' │
// │ code    │ 'CL'    │
// └─────────┴─────────┘
