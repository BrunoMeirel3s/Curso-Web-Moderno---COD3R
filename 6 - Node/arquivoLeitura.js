const fs = require('fs')//utiliza a biblioteca FileSystem

/**
 * __dirname representa a pasta atual
 */
const caminho = __dirname + '/arquivo.json'

//sincrono...
/**
 * Na leitura sincrona caso o arquivo a ser lido
 * seja grande demais o sistema irá ter que esperar
 * a finalização da leitura podendo gerar travamentos
 */
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono....
/**
 * Na leitura assincrona nós passamos o caminho
 * do arquivo, a códificação e uma callback
 * que será executada ao finalizar a leitura do arquivo
 * devemos utilizar dois parametros o de erro e o conteudo
 * podendo testar, caso o de erro esteja preenchido então
 * então aconteceu um erro na leitura do arquivo
 */
fs.readFile(caminho, 'utf-8',(err, conteudo)=>{
    /**
     * Caso o arquivo seja lido com sucesso podemos
     * continuar sua tratativa
     */
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

/**
 * arquivos json não precisam de filesystem para 
 * serem lidos, podemos usar apenas o require
 */
const config = require('./arquivo.json')
console.log(config.db)

/**
 * readdir é utilizado para listar arquivos pertecentes
 * a pastas, devemos passar o caminho e uma callback
 * funcionando igual com o readfile
 */
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})