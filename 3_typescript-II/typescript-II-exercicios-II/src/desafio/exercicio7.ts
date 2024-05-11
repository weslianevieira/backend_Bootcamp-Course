type TProduto = {
    nome: string,
    preco: number,
    classificacao: string
}

const listaDeProdutos = [
    {
        nome: "Camisa Cavada",
        preco: 60,
        classificacao: "Roupa de verão",
    },
    {
        nome: "Casaco",
        preco: 120,
        classificacao: "Roupa de inverno",
    },
    {
        nome: "Toalha",
        preco: 80,
        classificacao: "Roupa de banho",
    },
    {
        nome: "Calcinha",
        preco: 15,
        classificacao: "Roupa íntima",
    },
]

export function calcularPrecoComDesconto(listaDeProdutos: TProduto[]): TProduto[] {
    const descontoPorClassificacao:{ [classificacao: string] : number} = {
        "Roupa de verão": 0.05,
        "Roupa de inverno": 0.10,
        "Roupa de banho": 0.04,
        "Roupa íntima": 0.07
    }

    return listaDeProdutos.map(produto => {
        const desconto = descontoPorClassificacao[produto.classificacao] || 0;
        const precoComDesconto = produto.preco * (1 - desconto);
        return {...produto, precoComDesconto};
    });
}

export const produtosComDesconto = calcularPrecoComDesconto(listaDeProdutos);

