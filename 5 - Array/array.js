console.log(typeof Array, typeof new Array, typeof [])

//Uma das formas de criar um array
let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados)

//forma mais usual de criar o array
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[3])//indices não preenchidos aparecem como undefined

aprovados[3] = 'Paulo'//adicionar um elemento em índice específico
aprovados.push('Bruno')//adicionar elemento ao final do array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

aprovados.sort() //reordena o array, modificando os elementos do array original
console.log(aprovados)

delete aprovados[1] //delete de índice específico
console.log(aprovados[1])
console.log(aprovados[2])

aprovados['Bia', 'Carlos', 'Ana']

/**
 * A função splice é utilizada para remover e adicionar elementos
 * em um vetor, podemos selecionar de qual índice iremos começar,
 * depois quantos índices iremos apagar e após isso quais os elementos
 * iremos adicionar
 */
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)