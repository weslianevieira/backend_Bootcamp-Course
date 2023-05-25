function checarOperacoes(num1: number, num2: number): void {
  let resultado: number;

  //soma
  resultado = num1 + num2;
  console.log(`A soma dos numeros eh: ${resultado}`);
  //subtracao
  resultado = num1 - num2;
  console.log(`A subtacao dos numeros eh: ${resultado}`);
  //multiplicacao
  resultado = num1 * num2;
  console.log(`A multiplicacao dos numeros eh: ${resultado}`);

  //maior numero
  let maior: number;
  if (num1 > num2) {
    maior = num1;
    console.log(`O maior numero eh: ${num1}`);
  } else if (num2 > num1) {
    maior = num2;
    console.log(`O maior numero eh: ${num2} `);
  } else {
    console.log(`Os numeros sao iguais`);
    return;
  }

}

checarOperacoes(5, 3);
