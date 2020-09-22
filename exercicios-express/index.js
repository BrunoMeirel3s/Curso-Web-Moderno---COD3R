//require de express nos permite usar os métodos de express
const express = require('express')

//instancia de express recebe todos os métodos de express
const app = express()

//importando o módulo saudacaoMid 
const saudacao = require('./saudacaoMid')

app.use(saudacao('Bruno'))

//req.query armazena os atributos e seus valores passados na url
app.get('/clientes/relatorio', (req, res) =>{
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

//req.params armazena os atributos que passamos utilizando os ':'
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.post('/corpo',(req, res) =>{
    let corpo = ''
    req.on('data', function(parte){
        corpo += parte
    })
    req.on('end', function(){
        res.send(corpo)
    })
})



/*
    Use é utilizado para criarmos as respostas da aplicação a determinados links
    app.use é utilizado para responder a qualquer tipo de requisição
    app.get é utilizado para responder a requisições do tipo get
    app.post é utilizado para responder a requisições do tipo post
    app.all responde a todos os tipos de requisição
    durante a utilização podemos utilizar dois parametros, request e response
    no exemplo abaixo estamos utilizando o response para enviar uma informação ao entrar no link /opa
*/
app.get('/opa', (req, res, next) => {
    //para chamar a próxima função que atende a '/opa' precisamos declarar o atributo next

    res.json({
        data: [

            { id: 7, name: 'Ana', position: 1 },
            { id: 2, name: 'Bruno', position: 2 },
            { id: 3, name: 'Jair', position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    // res.json({
    //  name: 'iPad 32Gb',
    // price: 1899,
    // discount: 0.12
    // })
    //res.send("<h1>Estou bem</h1><br><br>Tipo é HTML!")

    //next é responsável por chamar a execução da próxima função que responde a /opa
    next()
})

app.use('/opa',(req, res)=>{
    console.log('Será que serei chamado')
})

app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000...')
})