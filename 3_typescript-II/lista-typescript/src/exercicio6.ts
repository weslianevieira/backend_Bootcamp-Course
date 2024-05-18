type TAccount = {
    client: string,
    totalBalance: number,
    debts: number[]
}

const accounts: TAccount[] =
    [
        { client: "João", totalBalance: 1000, debts: [100, 200, 300] },
        { client: "Paula", totalBalance: 7500, debts: [200, 1040] },
        { client: "Pedro", totalBalance: 10000, debts: [5140, 6100, 100, 2000] },
        { client: "Luciano", totalBalance: 100, debts: [100, 200, 1700] },
        { client: "Artur", totalBalance: 1800, debts: [200, 300] },
        { client: "Soter", totalBalance: 1200, debts: [] }
    ]

function totalBalanceCalculation(accounts: TAccount[]): TAccount[] {
    accounts.forEach((a) => {
        // reduz debitos a um único valor
        const totalDebts = a.debts.reduce((accumulator, element) => accumulator + element, 0)
        // calcula saldo - debitos
        a.totalBalance -= totalDebts
        // no final da operação o array deve ficar vazio
        a.debts = []
    })

    const redAccounts = accounts.filter((a) =>
        a.totalBalance < 0)

    return redAccounts
}

console.log(totalBalanceCalculation(accounts))
// [
//     { client: 'Pedro', totalBalance: -3340, debts: [] },
//     { client: 'Luciano', totalBalance: -1900, debts: [] }
// ]

