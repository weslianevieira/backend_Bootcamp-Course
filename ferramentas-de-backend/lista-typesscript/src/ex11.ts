/* 
Escreva uma função para converter de números normais para algarismos romanos (`string`).

Os romanos eram bem inteligentes. Eles conquistaram a maior parte da Europa e a governaram por centenas de anos. Inventaram estradas de concreto e até biquínis. Uma coisa que eles nunca descobriram foi o número zero. Isso tornou a escrita e a datação de histórias extensas de suas façanhas um pouco mais desafiadoras, mas o sistema de números que eles criaram ainda está em uso hoje. 

Os romanos escreviam números usando letras - I, V, X, L, C, D, M. Não há necessidade de converter números maiores que cerca de 3000. (Os próprios romanos não tendiam a ir mais alto)

A Wikipedia diz: Os algarismos romanos modernos são escritos expressando cada dígito separadamente, começando com o dígito mais à esquerda e pulando qualquer dígito com valor zero.

Para ver isso na prática, considere o exemplo de 1990.

Em algarismos romanos 1990 é MCMXC: 1000=M 900=CM 90=XC */

const funcao11 = (numeroInicial: number): string => {
  const numRomanos: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let romanos = "",
    i;
  for (i in numRomanos) {
    while (numeroInicial >= numRomanos[i]) {
      romanos += i;
      numeroInicial -= numRomanos[i];
    }
  }
  return romanos;
};

//console.log(funcao11(1990)); MCMXC
//console.log(funcao11(2193)); MMCXCIII
