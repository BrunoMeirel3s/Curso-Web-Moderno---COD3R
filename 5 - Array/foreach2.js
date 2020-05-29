/**
 * Criamos um forEach personalizado direto no prototype do array
 * criando uma função que receba outra função, o for percorre o vetor
 * até o fim passando como parametro para a callback o elemento, indice e o vetor
 */
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i< this.length ; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach2(function(elemento, indice, array){
    console.log(`${indice + 1}: ${elemento}`)
})