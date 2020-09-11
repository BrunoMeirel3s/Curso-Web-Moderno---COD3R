//código abaixo recebe as linhas para realizar o processamento
module.exports = rows => {
    return new Promise((resolver, reject)=>{
        try{
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(word => word.toLowerCase())
                .map(word => word.replace('"', ''))

            resolver(words) 
        } catch(e){
            reject(e)
        }
    })
}

function filterValidRow(row){
    const notNumber = !parseInt(row.trim())//verifica se a linha é um número, se realizar o parse é um número senão é um texto
    const notEmpty = !!row.trim()//tentar remover espaços em branco, caso não consiga remover significa que a linha está vazia
    const notInterval = !row.includes('-->')//verifica se a linha possui o '-->' que significa que a linha é um intervalo

    return notNumber && notEmpty && notInterval // retorna true ou false de acordo com o processamento
}

const removePunctuation = row => row.replace(/[,?!.-]/g, '')
const removeTags = row => row.replace(/(<[^>]+)>/ig,'').trim()
const mergeRows = (fullText, row) => `${fullText} ${row}`