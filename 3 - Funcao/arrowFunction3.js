let comparaComThis = function (param){
    console.log(this === param)
}

/**
 * Criando uma função utilizando a forma tradicional
 * o this irá apontar para o objeto global
 */
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)//trocando o contexto de execução
comparaComThis(global)//retorna false
comparaComThis(obj)//retorna true


/**
 * Ao criar uma função utilizando Arrow Function o this
 * não mais irá apontar para global e sim para module.exports
 */
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);//module.exports é o contexto de execução do documento

/**
 * Não é possível mudar o contexto de execução de uma função arrow
 */
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);