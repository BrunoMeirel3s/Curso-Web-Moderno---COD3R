const nums = [1, 2, 3, 4, 5]

//For com propósito
/**
 * Map cria um novo vetor de mesmo tamanho do original
 * aplicando uma callback para cada elemento, map não
 * modifica o array original
 */
let resultado = nums.map(function(e){
    return e * 2;
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

/**
 * Podemos utilizar maps em cadeia para aplicar funções
 * no vetor, lembrando que o map cria um novo vetor
 */
resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado)