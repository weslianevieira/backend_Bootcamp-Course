type TPrato = {
    nome: string, 
    custo: number,
    valorDeVenda: number,
    ingredientes: string[]
}

const pratos: TPrato[]  = [
    {
        nome: "Feijoada",
        custo: 10,
        valorDeVenda: 25,
        ingredientes: ["arroz", "feijão", "partes do porco", "couve"]
    },
    {
        nome: "Strogonoff",
        custo: 15,
        valorDeVenda: 25,
        ingredientes: ["arroz", "frango", "creme de leite", "batata palha"]
    },
]
// a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.
export function cadastrarPrato(nome: string, custo: number,valorDeVenda: number, ingredientes: string[]): TPrato[] {
    const novoPrato = {
        nome: nome,
        custo: custo,
        valorDeVenda: valorDeVenda,
        ingredientes: ingredientes
    }

   pratos.push(novoPrato)

    return pratos

}

// B) 

export function obterPrecoPorNome(nomeInput:string): number | string {
    const pratoEncontrado = pratos.find( prato => prato.nome.toLowerCase().includes(nomeInput.toLowerCase()))
    return pratoEncontrado ? `O preço é R$${pratoEncontrado.valorDeVenda}.` : "Preço do prato não disponível"
}

// C

type Venda = {
    nomePrato: string;
    nomeCliente: string;
};

const vendas: Venda[] = []; 

export function venderPrato(nomePrato: string, nomeCliente: string): Venda[] {
    vendas.push({ nomePrato, nomeCliente }); 
    return vendas 
}

// D)

export function calcularLucroRestaurante(): number {
    let lucroTotal = 0;
    for (const venda of vendas) {
        const produtoVendido = pratos.find(prato => prato.nome === venda.nomePrato);
        if (produtoVendido) {
            const lucro = produtoVendido.valorDeVenda - produtoVendido.custo;
            lucroTotal += lucro;
        }
    }
    return lucroTotal;
}
