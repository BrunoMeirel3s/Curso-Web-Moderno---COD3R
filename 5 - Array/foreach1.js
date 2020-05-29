const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

/**
 * ForEach executa uma ação para todos os elementos do array,
 * sendo assim passamos uma função callback para ser executa
 * essa callback sempre recebe os elemenetos em: elemento, indice, vetor
 */
aprovados.forEach(function(elemento, indice, array){
    console.log(`${indice + 1}: ${elemento}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)