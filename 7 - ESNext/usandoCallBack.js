//Sem promise
/**
 * Exemplo criado para demostrar a dificuldade de utilização
 * de muitas callbacks aninhadas, criado um efeito conhecido
 * como callback hell
 */
const http = require('http')//instânciaa de http para fazer requisições web

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    //.get obtem a resposta da url informada
    http.get(url, res => {
        let resultado = ''

        /**
         * Utilizado para concatenar os dados recebidos pois 
         * os mesmos não vem todos de uma unica vez, por isso
         * res.on vasculha os dados que vem no 'data' e executa
         * uma callback para armazenamento destes dados
         */
        res.on('data', dados =>{
            resultado += dados
        })

        /**
         * No final do processamento dos dados é executado
         * a callback passando como retorno o parse do JSON contendo
         * os dados dos alunos
         */
        res.on('end',  () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
/**
 * getTurma() recebe a letra que será colocada na url e a callback
 * que recebe o JSON retornado em forma de objeto, estamos
 * armazenando na variável nomes a concatenação de um map que percorre
 * alunos e em cada linha junto uma letra: A, B ou C com o nome do aluno
 */
getTurma('A', alunos=>{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))

    getTurma('B', alunos=>{
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))

        getTurma('C', alunos =>{
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})