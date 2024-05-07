- 🏅  Desafios
    - Exercício 6
        
        Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:
        
        a) A soma desses números
        
        b) A subtração desses números
        
        c) A multiplicação desses números
        
        d) Qual deles é o maior
        
        Você pode fazer todas as operações na mesma função.
        
        Como estamos usando o TypeScript, devemos passar para o código o tipo de parâmetro que é esperado pela função, afinal, no javascript, nada nos impede de passar parâmetros sem especificação. É como diz aquela piada de programador:
        
        !["Alguém pode me explicar TypeScript como se eu fosse uma criança de 5 anos?"
        "Se você disser 'laranja', o TypeScript vai te perguntar se você está falando da fruta ou da cor. O JavaScript não vai te perguntar nada e você pode acabar bebendo um copo de tinta laranja."](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c6f93b92-d59e-48dd-a267-4ae8bf882e52/Untitled.png)
        
        "Alguém pode me explicar TypeScript como se eu fosse uma criança de 5 anos?"
        "Se você disser 'laranja', o TypeScript vai te perguntar se você está falando da fruta ou da cor. O JavaScript não vai te perguntar nada e você pode acabar bebendo um copo de tinta laranja."
        
        - Lembre-se de tipar as variáveis e a saída da funcão, como neste exemplo.
            
            ```tsx
            function sayHello(name: string): void {
            	console.log("Hello,", name)
            }
            ```
            
        
    - Exercício 7
        
        Uma das definições de seres vivos implica em identificar se ele possui células ou não. Hoje em dia, sabe-se que as características deles ficam salvas dentro de uma molécula, um tanto quanto grande, chamada de DNA (Ácido Desoxirribonucleico). Uma das tarefas mais importantes para a sobrevivência das células é a transcrição do RNA (Ácido Ribonucleico) a partir de um DNA. Este processo consiste em identificar as bases nitrogenadas que formam o DNA, em questão. Todas as moléculas de DNA podem ser representadas como uma sequência de bases nitrogenadas que podem ser: a A (adenina), T (timina), G (guanina) ou C (citosina). Abaixo, há um exemplo disto
        
        ```
        ATT GCT GCG CAT TAA CGA CGC GTA
        ```
        
        Para se formar o RNA, devemos realizar a troca das bases nitrogenadas, seguindo a regra: A (adenina) vira U (uracila - específica do RNA); T (timina) vira Adenina (A), C (citosina) vira G(guanina); e G (guanina) vira C (citosina).  O RNA transcrito a partir do exemplo de DNA acima é
        
        ```
        UAA CGA CGC GUA AUU GCU GCG CAU
        ```
        
        Escreva um programa que converta uma string de DNA em uma string de RNA. Para os exemplos acima, a entrada seria `"ATTGCTGCGCATTAACGACGCGTA"` e a saída `"UAACGACGCGUAAUUGCUGCGCAU"`
        
    - Exercício 8
        
        Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for `"abcd"`, a saída deve ser `"dcba"` .
        
    - Exercício 9
        
        Escreva uma função que valida se uma pessoa pode ser estudante da Labenu. Para isso a função deve receber como parâmetro as respostas dessas 4 perguntas:
        
        - Qual a sua idade?
        - Você possui ensino médio completo?
        - Quantas horas você tem disponível na semana para o curso?
        - O seu curso será o “integral” ou “noturno”?
        
        A função deve retornar um booleano (true ou false) que indica se a inscrição para o curso é válida, ou seja, se o usuário pode ou não fazer o curso da Labenu. A inscrição é válida quando todos os seguintes requisitos forem atendidos:
        
        - A pessoa possui mais de 18 anos;
        - Possui ensino médio completo;
        - Possui pelo menos 40 horas livres na semana para o curso integral e 20 horas para o curso noturno.