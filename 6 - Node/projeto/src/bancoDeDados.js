/**
 * bandoDeDados está simulando um banco de dados
 * para que possamos usar com o script servidor
 */
/**
 * sequence é utilizado para criar um novo id
 * para os produtos
 */
const sequence = {
    _id: 1,
    get id(){return this._id++}
}

const produtos = {}

//Função para inserir um produto no banco
function salvarProduto(produto){
    //verifica se o produto possui id caso não possua ele usa sequence para atribir um id
    if(!produto.id){ 
        produto.id = sequence.id // sequence.id retorna um novo id válido
    }

    //caso o produto já possua id definido ele é apenas armazenado no objeto produtos
    produtos[produto.id] = produto

    return produto
}

//retorna o produto de id informado na execução da função
function getProduto(id){
    return produtos[id] || {}
}

//retorna todos os produtos cadastrados
function getProdutos(){
    return Object.values(produtos)
}

//exclui um produto de id enviado como parametro
function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

//module.exports deixa as funções visíveis para que outros módulos as possam utilizar
module.exports = {
    salvarProduto,
    getProduto,
    getProdutos,
    excluirProduto
}


