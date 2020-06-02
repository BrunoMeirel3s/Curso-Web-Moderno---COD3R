const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

/**
 * O flatMap não faz parte dos comandos do JavaScript
 * porém podemos cria-lo com o código abaixo o mesmo realiza
 * a união entre valores de arrays porém também remove valores
 * de arrays de arrays, sendo assim possui mais profundidade do que
 * o concat
 */
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)