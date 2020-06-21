//express herda os métodos utilizados para trabalhar com funcionalidades web
const express = require('express')

//app é uma instância de express que portanto pode utilizar seu métodos
const app = express()

/*
    Body parser é responsável por fazer o parse do conteúdo enviado no post
    deixando esse conteúdo disponível no corpo da requisição
*/
const bodyParser = require('body-parser')

//utilizando o bodyParser para realizar o parse da requisição
app.use(bodyParser.urlencoded({extended:true}))

//app.post irá responder a requisições feitas no link informado entre parenteses
app.post('/usuarios', (req, resp)=>{
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Incluído!</h1>')
})

//utilizando o :id estamos recebendo um parametro variável
app.post('/usuarios/:id', (req, resp)=>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado</h1>')
})

app.listen(3003)