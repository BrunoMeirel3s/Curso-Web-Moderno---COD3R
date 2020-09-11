//fs é o método filesystem para acesso de arquivos no computador
const fs = require('fs')

//código abaixo recebe os paths dos arquivos para realizar o processamento
module.exports = paths => {
    return new Promise((resolver, reject)=>{
        try{
            //abaixo é realizado o processamento em cima do vetor rows que representa todos os arquivos de legendas
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8'))//fs.readFileSync lê o arquivo, toString transforma em string
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`)//este reduce une todas as legendas selecionadas em um arquivo só quebrando por enter
                .split('\n')//quebra as linhas
                
            resolver(rows)//retorna as linhas já unidas e quebradas
        } catch(e){
            reject(e)
        }
    })
}