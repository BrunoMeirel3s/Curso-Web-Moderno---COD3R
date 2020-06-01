const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))

/**
 * O reduce é utilizado para pegar o resultado de uma callback
 * e passarmos esse resultado para a próxima chamada da callback
 * podendo utilizar para somar valores e outras operações matemáticas,
 * sempre assumimos um valor como acumulador e outro como valor da iteração atual,
 * sendo assim no exemplo abaixo o primeiro valor do vetor é o acumulador
 * e o segundo valor o valor atual, após isso é realizado a soma desses valores
 * o resultado disso é passado como acumulador para a próxima iteração da callback
 */
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)