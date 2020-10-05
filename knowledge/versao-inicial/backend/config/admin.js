/**
 * Neste módulo é verificado se o usuário que está acessando é administrador
 * se sim é permitido a execução da requisição que foi solicitado, desta forma
 * ao chamar esse módulo no arquivo routes podemos impedir usuários não administradores
 * de acessar determinadas rotas
 */
module.exports = middleware => {
    return (req, res, next) => {
        if(req.user.admin){
            //se o usuário for admin é executado o middleware passado como parametro
            middleware(req, res, next)
        }else{
            res.status(401).send('Usuário não é administrador')
        }
    }
}