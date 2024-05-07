- **Exercício 1**
    
    O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
    
    a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
    
    b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
    
    c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
    
    `nome`, que é uma string;
    
    `idade`, que é um número;
    
    `corFavorita`, que é uma string.
    
    Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
    
    d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.

- **Exercício 2**
    
    Observe a função a seguir, escrita em JavaScript:
    
    ```jsx
    function obterEstatisticas(numeros) {
    
        const numerosOrdenados = numeros.sort(
            (a, b) => a - b
        )
    
        let soma = 0
    
        for (let num of numeros) {
            soma += num
        }
    
        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
    
        return estatisticas
    }
    ```
    
    a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
    
    b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
    
    c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
    
    ```jsx
    const amostraDeIdades = {
    
    		numeros: [21, 18, 65, 44, 15, 18],
    
    		obterEstatisticas: (numeros) => {...}
    }
    ```
    
    - Dica
        
        Ao posicionar o cursor sobre o nome da variável ou função, a IDE normalmente exibe a tipagem que está sendo implicitamente atribuída a ela.

- **Exercício 3**
    
    Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto.
    
    Observe o seguinte array de posts:
    
    ```jsx
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
    ]
    ```
    
    a) Copie o código acima para um arquivo .ts depois:
    
    - crie um *type* para representar um post;
    - Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.
    - Dica
        
        Lembre-se da variável de tipo do typescript, que é uma descrição estrutural do comportamento de um objeto. Ou seja, o type define as propriedades e tipos que o objeto deve ter. 
        
        ```tsx
        type person = { 
        name: string, 
        age: number
        }
        
        const astrodev: person = {
        name: "Astrodev",
        age: 30
        }
        ```
        
    
    b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:
    
    ```jsx
    function buscarPostsPorAutor(posts, autorInformado) {
      return posts.filter(
        (post) => {
          return post.autor === autorInformado
        }
      )
    }
    ```
    
    Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária.

- **Exercício 4**
    
    Na aula, vimos que os arquivos escritos em Typescript, com sua extensão `.ts` passam por um processo de conversão de typescript para Javascript para que possam ser lidos e executados. Este processo é chamado de **transpilação**. 
    
    Com a biblioteca `typescript` instalada, temos acesso ao comando `tsc` no terminal. O `tsc` é o comando responsável por fazer a transpilação dos arquivos.
    
    Abaixo, há um exemplo de código escrito em Typescript. 
    
    a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use comentários para responder as questões.
    
    b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
    
    `exercicio-4.ts`
    
    ```tsx
    type pokemon = {
    	name: string,
      types: string,
    	healthPoints: number
    }
    
    const pokemon1: pokemon = {
      name: "Charmander",
      types: "Fire",
      healthPoints: 28
    }
    
    const pokemon2: pokemon = {
      name: "Bulbasaur",
      types: "Grass/Poison",
      healthPoints: 31
    }
    
    const pokemon3: pokemon = {
      name: "Squirtle",
      types: "Water",
      healthPoints: 35
    }
    ```
    
    c) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.
    
    d) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
    
    - Dicas
        
        a) o comando `tsc` seguido do nome do arquivo executa a transpilação de arquivos.
        
        b) Esse comando funciona de forma parecida com o `cd` do terminal, então podemos descrever não apenas nomes de arquivo, mas também seus caminhos.
        
        c) Crie outros arquivos .ts na pasta. Podemos rodar o comando `tsc` para transpilar vários arquivos ao colocar seus nomes separados por um espaço.
        
        ```bash
        tsc arquivo1.ts arquivo2.ts arquivo3.ts
        ```
        
        Ou ainda, o comando `tsc` sem parâmetros, que converte todos os arquivos com a extensão `.ts` que encontrar.

    - **Exercício 5**
    
    O comando `tsc --init` pode ser executado no terminal para gerar um arquivo `tsconfig.json` na pasta em que estamos. Quando esse arquivo é gerado, ele traz uma série de parâmetros de transpilação. Execute este comando na pasta em que está agora, e abra o arquivo. Ele será algo parecido com isso:
    
    - **Expanda aqui para ver o conteúdo do arquivo**
        
        ```json
        {
          "compilerOptions": {
            /* Basic Options */
            // "incremental": true,                   /* Enable incremental compilation */
            "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
            "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
            // "lib": [],                             /* Specify library files to be included in the compilation. */
            // "allowJs": true,                       /* Allow javascript files to be compiled. */
            // "checkJs": true,                       /* Report errors in .js files. */
            // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
            // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
            // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
            // "sourceMap": true,                     /* Generates corresponding '.map' file. */
            // "outFile": "./",                       /* Concatenate and emit output to single file. */
            // "outDir": "./",                        /* Redirect output structure to the directory. */
            // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
            // "composite": true,                     /* Enable project compilation */
            // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
            // "removeComments": true,                /* Do not emit comments to output. */
            // "noEmit": true,                        /* Do not emit outputs. */
            // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
            // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
            // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
        
            /* Strict Type-Checking Options */
            "strict": true,                           /* Enable all strict type-checking options. */
            // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
            // "strictNullChecks": true,              /* Enable strict null checks. */
            // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
            // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
            // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
            // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
            // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */
        
            /* Additional Checks */
            // "noUnusedLocals": true,                /* Report errors on unused locals. */
            // "noUnusedParameters": true,            /* Report errors on unused parameters. */
            // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
            // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
        
            /* Module Resolution Options */
            // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
            // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
            // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
            // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
            // "typeRoots": [],                       /* List of folders to include type definitions from. */
            // "types": [],                           /* Type declaration files to be included in compilation. */
            // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
            "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
            // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
            // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */
        
            /* Source Map Options */
            // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
            // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
            // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
            // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */
        
            /* Experimental Options */
            // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
            // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
        
            /* Advanced Options */
            "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
          }
        }
        ```
        
    
    a) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de **configuração do projeto** ali em cima). Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? O que mudou em comparação com o arquivo criado pelos slides?