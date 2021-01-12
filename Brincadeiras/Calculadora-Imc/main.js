function calculateImc(){
    const peso = document.getElementById("peso")
    const altura = document.getElementById("altura");
    let imc = peso / altura * altura;
    return imc;
}

calculateImc()