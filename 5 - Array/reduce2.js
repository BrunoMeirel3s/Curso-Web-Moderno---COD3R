const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio 1: todos os alunos são bolsistas?
const bolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual
})
console.log(`Todos os alunos são bolsistas?: ${bolsista}`)


//Desafio 2: Algum aluno é bolsista?
const bolsista2 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador || atual
})
console.log(`Algum aluno é bolsista?: ${bolsista2}`)