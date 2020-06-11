/**
 * Promises são estruturas que executam após determinado tempo
 * ou após um processamento muito longo, possuem um parametro
 * resolve que é executado caso seja possível realizar a promise
 * e possui o parametro reject caso não seja possível executar a promise
 * junto com o reject utilizamos a ação catch() que recebe o erro e
 * nos permite realizar uma tratativa deste erro
 */

 /**
  * Neste exemplo estamos criando uma função que irá executar
  * a promise depois de um tempo para simular um processamento
  */
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(frase)
            //reject(frase)
        }, segundos * 1000)
    })
}
/**
 * O then executa uma callback que recebe o retorno da promise
 * sendo o response, esse retorno é recebido como parâmetro pela
 * callback e pode ser processado, o  catch só é chamado caso
 * seja executado o reject invés do response
 */
falarDepoisDe(3,'Que legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e=> console.log(e))//catch captura o erro para tratamento