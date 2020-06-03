/**
 * module.exports, this e exports apontam
 * para o mesmo endereço de memória,
 * porém se associarmos a um objeto ou algo
 * do tipo o endereço de memória irá mudar
 * e não mais this,exports e module exports
 * irão apontar para o mesmo endereço de memória
 */
console.log(module.exports === this)
console.log(module.exports === exports )

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

//mesmo alterando exports o module exports
//ainda irá apontar para seu endereço original
exports = {
    nome: 'teste'
}

console.log(module.exports)