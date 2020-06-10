/**
 * Map permite criar vetores que possuem como índice valores
 * diferentes de números, como strings, funções ou objetos
 */
const tecnologias = new Map() //Usamos o new para estanciar o Map
/**
 * Usamos o set para inserir valores no vetor informando o indice
 * e o valor associado ao indice
 */
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.react)//não funciona
console.log(tecnologias.get('react').framework)//precisamos usar o get para chamar os indices

/**
 * Outra forma de inserir valores com indices variados
 */
const chavesVariadas = new Map([
    [function (){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

//Não é possível possuir indices iguais, o último valor atribuído será o valor corrente
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)