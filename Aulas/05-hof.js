// high order function
// É uma função que recebe outra função como parametro 
const soma = (a,b) => a+b;
const multiplicar = (a,b) => a*b;

const calc = (operacao, a,b) => operacao(a,b)

const resultadoDaSoma = calc(soma, 10,5) // ou seja faça a operação soma
const resultadoMultiplicacao = calc(multiplicar, 2,4) // ou seja faça a operação de multiplicação

console.log(resultadoDaSoma);
console.log(resultadoMultiplicacao);

// Retornando uma função
const selecioneOperacao = operacao =>{
    if (operacao === "+"){
        return soma;
    }
    if (operacao === "*"){
        return multiplicar
    } 
}

const escolheOperacao = calc(selecioneOperacao('+'), 10,10) // um pouco mais complexo 
console.log(escolheOperacao);

