const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.90,
    desconto: 0.15
}

/**
 * writeFile é utilizado para salvar um arquivo no computador
 * devendo passar o diretorio, o nome do arquivo e depois o conteúdo do arquivo
 * no exemplo em questão é a conversão de um objeto em um json
 * devemos por ultimo passar uma callback com somente o parametro de erro
 * caso o arquivo seja gravado com sucesso o erro ficará vazio
 */
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})