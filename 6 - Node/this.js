console.log(this === global)//no escopo de documento o this não aponta para global
console.log(this === module)//this não aponta para module

console.log(this === module.exports)//no escopo de documento o this aponta para module.exports
console.log(this === exports)//no escopo de documento o this aponta para exports

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)//dentro de uma função o this não mais aponta para exports
    console.log(this === module.exports)//dentro de uma função o this não mais aponta para module.exports
    console.log(this === global)//dentro de uma função o this aponta para global

    /**
     * Ao utilizar o this dentro de uma função da forma abaixo o atributo
     * em questão ficará disponível no escopo global deste documento
     */
    this.perigo = '....'
}
logThis()