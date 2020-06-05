//Node faz cache e sempre irá retornar o mesmo
//endereço de memória para quem fizer require
//dos valores contidos no module exports caso seja
//retornado apenas um objeto contendo os valores
module.exports = {
    valor: 1,
    inc(){
        this.valor++
    }
}