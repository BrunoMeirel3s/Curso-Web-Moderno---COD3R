const porta = 3003 //porta na qual o servidor ficará respondendo

const express = require('express')//express possui os métodos necessários para utilização das tecnologias de servidor
const app = express()//instância de express
const bancoDeDados = require('./bancoDeDados')//instância de banco de dados


//este get retorna todos os produtos cadastrados
app.get('/produtos',(req, res, next) => {
    //res.send({nome: 'Notebook', preco: 123.45}) //Converte automaticamente para JSON

    res.send(bancoDeDados.getProdutos())//utiliza o métodos getProdutos da instancia de banco de dados
})

//este get retorna apenas um produto específico que possui id informada na url
app.get('./produtos/:id',(req, res, next) => {
    /**
     * Os parametros informados na url ficam na request que possui um objeto
     * chamados params onde armazena os valores passados
     */
    res.send(bancoDeDados.getProduto(req.params.id))//estamos chamando getProduto passando id como parametro
})

/**
 * post abaixo é utilizado para armazenar os produtos
 */
app.post('./produtos', (req, res, next) => {
    /**
     * os dados do post são enviados pelo require em um
     * objeto chamado body que é o corpo da requisição
     */
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON do produto gravado
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta: ${porta}`)
})