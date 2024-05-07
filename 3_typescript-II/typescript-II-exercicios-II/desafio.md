- Exercício 5
    
    Você foi contratado por um escritório médico para organizar a agenda de consultas
    
    ```tsx
    [
      { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
      { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
      { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
      { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
    ]
    
    ```
    
    A sua tarefa é criar uma função que receba o **array** acima como parâmetro e retorne um `array`de consultas ordenado pelos nomes dos pacientes (em ordem alfabética). ****Para isso crie um `type` para as consultas.

- Exercício 6
    
    O processo de classificação é muito importante para o crescimento de todas as ciências. O ser humano tem a necessidade de atrelar nome aos acontecimentos para que fique mais fácil de se referir a eles. Tendo isso em vista, vamos analisar um pouco uma das ciências mais importantes para a humanindade: a História. A história dos homens é dividida levando-se em consideração características políticas, econômicas e sociais de cada uma das eras; e, ao menos, um evento importante que represente uma mudança brusca
    
    Acredita-se que o ser humano moderno surgiu em meados do ano 100.000 AC; nesta época, nós costumávamos a ser nômades e estávamos, aos poucos, descobrindo atividades importantíssimas, tais como agricultura, criação de animais, pesca, coleta, uso do fogo e outros. A este período, dá-se o nome de **Pré-história**, porque não há registros escritos. A invenção da escrita, em **4000 AC**, revela, então, uma mudança brusca e indica o início do que chamamos de **Idade Antiga**. Nesta era, o ser humano estava dividido em impérios de diversos tamanhos e culturas. Os mais marcantes, para nós, podem ser os Gregos, Romanos, Egípcios, Mesopotâmicos, Persa e Feníncios. Isto ocorre porque temos uma visão europeia da história, mas não podemos nos esquecer de grandes impérios de origens orientais, tais como, os Hunos, Vândalos e Francos. A todos estes, normalmente, damos o nome de Bárbaros, cujo significado direto é "não pertence ao império romano". Este império chegou a ser considerado um dos maiores, estendendo seu território por boa parte da Europa. A ascensão dos bárbaros, porém, pôs essa hegemonia em risco, até que, em **476 DC**, houve a queda do império romano do ocidente, significando o início do que chamamos de **Idade Média**. Este período foi marcado, principalmente, pela falta de centralização política. Cada nobre, ou Senhor Feudal, tinha a sua terra (chamada de Feudo), as suas regras e os seus servos. Isso aconteceu principalmente porque os impérios não estavam conseguindo dar suporte e segurança para os seus cidadãos. Entretanto, havia algo que unificava a maioria dos povos europeus: a Igreja Católica. Esta foi uma época conturbada para o ser humano, que passou por diversas enfermidades, a citar: grande fome, peste negra, A Guerra dos Cem anos e muito mais. Isso tudo colocou em choque a estrutura feudal: o feudo começou a não conseguir dar segurança a seus residentes (parece que o jogo virou, não é mesmo?). Concomitantemente a isto, uma nova classe social surgia: os comerciantes. Estes encontravam grandes dificuldades devido a disparidade que existia entre os feudos; e, então, começaram a se juntar em burgos (cidades) e seus habitantes começaram a ser chamados de burgueses. Aliado a isto, uma das cidades mais importantes da época, a Constantinopla, foi tomada pelo império turco, em **1453 DC**, sendo, então, o marco do início da **Idade Moderna**. Ao pensar neste período, 4 grandes conceitos são os mais importantes: o renascimento cultural (social), o mercantilismo (economia), o absolutismo (política) e as reformas protestantes (religião). O fato mais marcante desta idade foi a centralização dos monarcas. Estes eram considerados deuses, representantes divinos, cujas vontades e ordens deveriam ser cumpridas sem nenhuma opção de contrariar. Foi nesta época, também, que nosso grandioso país foi ~~invadido~~ descoberto pelos Portugueses. Uma característica a se destacar era o sofrimento do povo: eles tinham diversos impostos a pagar, passavam fome, eram muito explorados, enquanto os nobres, a corte a burguesia tinham vidas a se invejar. Isto, junto com outros fatores, culminou numa revolução em **1789 DC**, com o lema "*Liberté*, *Egalité*, *Fraternité*"(Liberdade, igualdade, fraternidade): a Revolução Francesa. Este evento incentivou diversos outros: revoluções em outros países europeus, a independência dos Estados Unidos, a Conjuração Baiana e muito mais. Ele é, então, o marco do início da **Idade Contemporânea**, que é a que estamos até hoje. 
    
    Tendo este pequeno texto em mente, você deve criar uma função que determine a que idade histórica (em negrito no texto) um ano pertence. Ela deve esperar receber o ano e um outro parâmetro que seja a sigla "AC" ou "DC". Algumas características a mais desta função:
    
    - Caso ela seja chamada sem passar uma sigla, ela deve automaticamente concluir que se trata de um ano "DC"
    - Caso ela seja chamada passando um valor inválido (tanto para o ano como para a sigla), ela deve retornar uma mensagem indicando um erro.
    - Dica
        
        Lembre-se do enum, um dos tipos do TypeScript que nos permite declarar um conjunto de valores pré-definidos (e que não serão modificados).
        
        ```tsx
        enum LabenuClasses {
         BOUMAN = "Bouman",	
         SAGAN = "Sagan"
         HAMILTON = "Hamilton"
        }
        ```

- Exercício 7
    
    Não é segredo para ninguém que as lojas tendem a lucrar bastante próximo ao período natalino. O faturamento delas é o principal indicativo disto. Normalmente, em documentos contáveis, representa-se um valor negativo com a cor vermelha; e um valor positivo com a cor preta. Esta é a razão pela qual a sexta-feira depois da Ação de Graças é chamada de **Black Friday**, indicando que as empresas tendem a ter um faturamento muito alto. Neste exercício, você vai implementar uma funcionalidade importante de uma loja de roupas o valor final do produto durante a black friday. Para isto, ela classifica as roupas em: de verão, de inverno, para banho e íntimas. Cada uma tem a sua própria porcentagem de desconto: 5% (verão), 10% (inverno), 4% (banho) e 7% (íntimas). 
    
    a) Escreva uma função que receba um array de produtos com nome, preço e classificação; e retorne um array com essas informações e um campo mais: "preço com desconto"

- Exercício 8
    
    Um parente seu decidiu abrir um restaurante; e, recentemente, ele descobriu que você está fazendo um curso de programação. Além de pedir para você arrumar alguns computadores antigos dele, configurar a internet e outros pedidos clássicos, ele prometeu te pagar caso você implementasse um sistema para o restaurante. Os pratos deste restaurante possuem  um nome, um custo, um valor de venda, e um array de ingredientes. Cada uma das vendas deve conter o nome do prato e o nome do cliente que realizou a compra.
    
    a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.
    
    b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome.
    
    c) Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global.
    
    d) Escreva uma função que determine o lucro do restaurante.