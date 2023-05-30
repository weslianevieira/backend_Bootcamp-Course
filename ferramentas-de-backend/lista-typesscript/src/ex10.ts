/* O CPF consiste de 11 dígitos cuja configuração respeita o formato XXX.XXX.XXX-XX. Para a construção de um número de CPF as seguintes regras são aplicadas.

- Os oito primeiros dígitos são os número-base
- O nono dígito é a região fiscal
- O penúltimo dígito é o dígito verificador (DV) módulo 11 dos nove dígitos anteriores
- O último dígito é o DV módulo 11 dos dez dígitos anteriores

Para o cálculo dos DV existem pesos associados a cada dígito, abaixo segue exemplo do cálculo dos DV do CPF com número-base 145382206.*/


/* Você deve criar uma função que receba o CPF no formato “xxx.xxx.xxx-xx” e faça uma validação do valor recebido. Caso o CPF recebido seja válido retorne um True e caso seja inválido retorne False */

/* input: sequencia do CPF/ string
   output: eh valido ou nao/ boolean */


//Aqui estou assumindo o valor do CPF chegando com todos digitos e apenas digitos
const verificaPrimeiroDigito = (digitos: string): boolean => {
  let multiplicador = 10,
    somatorio = 0;
  for (var _i = 0; _i < digitos.length - 2; multiplicador--, _i++) {
    var digito = Number(digitos.charAt(_i));
    somatorio += digito * multiplicador;
  }
  let modOnze = somatorio % 11;
  let resultado = 11 - modOnze;
  if (resultado >= 10) {
    resultado = 0;
  }
  return resultado === Number(digitos.charAt(9));
};

//Aqui estou assumindo o valor do CPF chegando com todos digitos e apenas digitos
const verificaSegundoDigito = (digitos: string): boolean => {
  let multiplicador = 11,
    somatorio = 0;
  for (var _i = 0; _i < digitos.length - 1; multiplicador--, _i++) {
    var digito = Number(digitos.charAt(_i));
    somatorio += digito * multiplicador;
  }
  let modOnze = somatorio % 11;
  let resultado = 11 - modOnze;
  if (resultado >= 10) {
    resultado = 0;
  }
  return resultado === Number(digitos.charAt(10));
};

function mesmosDigitos(cpf: string) {
  var i = cpf.length;
  var char = cpf.charAt(0);
  while (i--) {
    if (cpf[i] !== char) {
      return false;
    }
  }
  return true;
}

const funcao10 = (cpf: string): boolean => {
  //Limpando . e - da string
  let cpfApenasNumeros = cpf.split(".").join("");
  cpfApenasNumeros = cpfApenasNumeros.replace("-", "");
  //Verificação se todos são os mesmos numeros
  if (!mesmosDigitos(cpfApenasNumeros)) {
    //Verificação dos digitos
    if (verificaPrimeiroDigito(cpfApenasNumeros)) {
      if (verificaSegundoDigito(cpfApenasNumeros)) {
        return true;
      }
    }
  }
  return false;
};
