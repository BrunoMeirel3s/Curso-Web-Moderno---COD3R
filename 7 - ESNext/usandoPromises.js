//Com promise...

const http = require('http')//instânciaa de http para fazer requisições web

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    /**
     * Retornando uma promise podemos diminuir a quantidade
     * de código tornando mais efetivo, pois executamos o resolve
     * para quando retornar sucesso e o reject quando não conseguirmos
     * retornar sucesso
     */
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            /**
             * Utilizado para concatenar os dados recebidos pois 
             * os mesmos não vem todos de uma unica vez, por isso
             * res.on vasculha os dados que vem no 'data' e executa
             * uma callback para armazenamento destes dados
             */
            res.on('data', dados => {
                resultado += dados
            })

            /**
             * No final do processamento dos dados é executado
             * uma callback que utiliza um try para retornar o resolve
             * e um catch para o reject
             */
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes = []
/**
 * Promise.all executa todos as funções de uma vez e então
 * podemos tratar os resolver com o .then e o reject com
 * o catch()
 */
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))//espalha o retorno da promise em um vetor vazio
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))