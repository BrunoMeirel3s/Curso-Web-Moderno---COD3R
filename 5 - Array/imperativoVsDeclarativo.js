const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//Imperativo
/**
 * A abordagem imperativa foca em como deve ser feito,
 * dessa forma nós realizamos a programação de todo
 * o passo a passo.
 */
let total1 = 0;
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativo
/**
 * A abordagem declarativa foca mais no que tem que 
 * ser feito, por conta disso usamos funções prontas
 * em não programamos todo o passo a passo
 */
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)