//bodyparser é utilizado para tratar os dados recebidos no corpo de uma requisição do tipo post
const bodyParser = require('body-parser')

//cors é utilizado para permitir que uma aplicação realize requisições para outra aplicação distinta
const cors = require('cors')

module.exports = app => {
    //app.use aplica os middlewares
    app.use(bodyParser.json())
    app.use(cors())
}