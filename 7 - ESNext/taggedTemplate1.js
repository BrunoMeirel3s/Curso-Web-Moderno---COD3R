//Tagged Templates - processa o template dentro de uma função
function tag(partes, ...valores){
    //partes representa o valor textual da string
    console.log(partes)
    //valores representa as variáveis interporladas na string
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'aprovado'
/**
 * Ao utilizar a função tag iremos receber como retorno
 * uma array com a string sem as interpolações, um string
 * com as variáveis que foram interpoladas e por fim receberemos
 * o return de tag
 */
console.log(tag `${aluno} está ${situacao}`)
