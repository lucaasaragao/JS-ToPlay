/* Uma promise é um objeto que representa o successo
 ou a falha de uma operação assíncrona*/

 /*A maioria dos codigos em JavaScript que escrevemos são sincronos ou seja
 são lidos e interpretador de cima para baixo */ 

 /*Básicamente o código sincrono espera a função acima ser fianalizada antes
 de partir para a execução da próxima função*/
 
 /*Exemplo de cógido ASSINCRONO usando o metodo setTimeOut*/
 
 let randomNumber = 9; 

 setTimeout(() => {
     randomNumber += 100;
     console.log(randomNumber);
 }, 2000)

 console.log(randomNumber);

/*Requisições assincronas podem ser inicializadas e só serem finalizadas posteriomente*/
/*Requests são requisições assincronas*/


  