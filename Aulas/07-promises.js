// Vantagem em usar promises 
/*
Ganhar mais controles e legibilidade
Reduzir o acoplamento entra funções de callback
Mais previsibilidade e detalahamento no tratamento de erros
*/ 

//Sintaxe de uma promise

const aPromise = new Promise((resolve, reject)=>{ // a promisse contem dois parametros
    const aNumber = 10;
    //resolve(aNumber)
    reject(aNumber)
})

//.then é o método de sucesso
aPromise
    .then(value => value)
    .then(value => {
        console.log(value);
    })

    .catch(rejectValue =>{
        console.log({rejectValue});
    })