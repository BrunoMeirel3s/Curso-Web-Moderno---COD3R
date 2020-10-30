/**
 * Arquivo utilizado para configuração de sucesso e erro do axios
 * observe que em sucesso a resposta é o próprio retorno, em status de erro
 * 401 é realizado o direcionamento do usuário para a página home, os demais erros
 * são retornados o erro em sí
 */
import axios from 'axios'

const success = res => res
const error = err => {
    if(401 === err.response.status){
        window.location = '/'
    } else{
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(success, error)