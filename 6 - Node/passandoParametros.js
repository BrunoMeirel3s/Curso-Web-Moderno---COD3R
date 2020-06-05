/**
 * Ao dizer que module.exports é igual a uma função
 * podemos posteriormente passar parametros para
 * essa função usando outro módulo do node
 */
module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana ${nome}!`)
}