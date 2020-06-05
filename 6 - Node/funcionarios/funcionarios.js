const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
/**
 * Axios é um cliente http que realiza requisições
 */
const axios = require('axios')
/**
 * response.data armazena o json recuperado na url 
 * passada como parametro para a função get
 */
axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const mulherChinesa = funcionarios.filter(funcionario => {
        return funcionario.pais == 'China' &&  funcionario.genero == 'F'
    })

    const mulherChinesaMenorSalario = mulherChinesa.reduce((func, funcAtual) => {
        return func.salario < funcAtual.salario ? func:funcAtual
    })
    console.log(mulherChinesaMenorSalario)

})

