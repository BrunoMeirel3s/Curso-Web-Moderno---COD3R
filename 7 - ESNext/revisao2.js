//Arrow Function
const soma = (a, b) => a + b
console.log(soma(2,3))

//Arrow Function (this)
/**
 * Em arrow functions o this não varia 
 * sendo assim não importa se usarmos o bind
 * o this sempre irá apontar para o contexto da
 * função onde foi criado
 */
const lexico1 = () => {console.log(this === exports)}
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
function log(texto = 'Node'){
    console.log(texto)
}
log()
log('Bruno Meireles')

//operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,4,5))