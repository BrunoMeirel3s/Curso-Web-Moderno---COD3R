function saudacao(nome){
    //para retornar funções middlewares que recebem parametros
    //é importante utilizarmos este return function para garantir
    //que o código será executado apenas quando for chamado
    //evitando erros nos valores da variáveis
    return function(req, res, next){
        console.log('Seja bem vindo ' + nome + '!')
        next()    
    }
}

module.exports = saudacao