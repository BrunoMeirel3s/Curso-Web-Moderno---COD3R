const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const multer = require('multer')//utilizado para fazer o upload de arquivos

/**
 * Função diskstorage nos permite realizar alguns ajustes
 * nas configurações que iremos utilizar no upload de arquivos
 * em destinatio podemos informar o link que irá realizar o upload,
 * em filename podemos realizar ajustes para o nome que o arquivo irá
 * receber ao ser salvo
 */
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        /**
         * afim de evitar arquivos sobreescritos por possuírem nomes parecidos,
         * adicionamos a data em milisegundo no inicio do nome do arquivo
         */
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

/**
 * .single recebe o nome do input utilizado para realizar
 * o envio dos arquivos no frontEnd da aplicação
 */
const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res)=>{
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro')
        }

        res.end('Concluído com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    //resp.send envia os dados do formulário para o frontEnd da aplicação
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, resp)=>{
    //req.body
    //req.query
    //req.params 
    //req.query.numero é passado pelo frontEnd da aplicação utilizando get
    const par = parseInt(req.query.numero) % 2 === 0
    resp.send({
        resultado: par ? 'par':'impar'
    })
})
app.listen(8080, () => console.log('Executando...'))
