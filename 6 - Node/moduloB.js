/**
 * Utilizar o module.exports é a forma mais tradicional
 * de realizar a exportação de código para ficar disponível 
 * em outros módulos do Node
 */
module.exports = {
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa noite'
    }
}