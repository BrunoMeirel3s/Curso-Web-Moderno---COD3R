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

//Recurso do ES8
//Objetivo de simplificar o uso de promises....
/**
 * Marcando uma função com o async nós podemos utilizar
 * o await na hora de chamar uma função que pode demorar
 * a responder, como uma requisição web como no exemplo abaixo
 * assim as variáveis só recebem os valores após o processamento
 * completo de getTurma
 */
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}// Retorna um objeto asyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))//map utilizado para pegar somente os nomes dos alunos
    .then(nomes => console.log(nomes))