//first-class citizens
const toInt = parseInt; // não trazer a referencia da função
console.log(toInt('10') + 1); // invocação da função parse int

function comoVai(){
    console.log('Como vai? ')
}
function ola(){ // funções devem ser mantidas sempre no inicio deo codigo
    comoVai();
    console.log('olá');
}
ola(); // a invocação sempre deve ser definida para o final do codigo


// função pura ou pure-function
function dobra(num){
    return num*2; // toda função retorna algo
}
console.log(dobra(20))

// Arrow function
const multiplicar = (a, b) =>{
    return a*b;
}

console.log(multiplicar(2,2))

// Se tiver só um parametro, não precisa de acento
const contar = str =>{
    return str.length;
}
console.log(contar("Eu sou Lucas"));


//Deixando menos verboso
const multiplicaDoisValores = (c, d) => c*d;

console.log(multiplicaDoisValores(3,3));