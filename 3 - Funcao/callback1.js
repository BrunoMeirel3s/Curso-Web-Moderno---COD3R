const fabricantes= ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

/**
 * O forEach é uma callback que é executada para
 * cada elemento de um array, o forEach recebe os elementos
 * do array em: valor, indice, vetor.
 */
fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(a)
})