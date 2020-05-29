const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()//remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//adicionar elemento no final do array
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')//adicionar elemento no ínicio do array
console.log(pilotos)

//Splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)//remove a partir do índice 3 um elemento
console.log(pilotos)

/**
 * A função slice é utilizada para criar um novo array a
 * partir do índice informado
 */
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

//slice(inicio, final - 1) cria um novo array com um intervalo
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
