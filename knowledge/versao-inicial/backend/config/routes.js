/**
 * Utilizando o consing não precisamos utilizar o require para ter acesso aos
 * arquivos da api por exemplo, para chamar o método save de user.js apenas
 * seguimos o caminho app.api.user e o método save
 */
module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
}