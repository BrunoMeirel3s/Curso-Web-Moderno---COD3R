//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função

//Contexto léxico em ação!

const x = 'Global';

function fora(){
    const x = 'Local';
    /**
     * Lembrando que a função sempre irá lembrar
     * o escopo no qual ela foi construída, portanto
     * ao ser chamada externamente a função dentro()
     * irá considerar x = 'Local', independente de 
     * onde for chamada.
     */
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao= fora()
console.log(minhaFuncao())