function tratarErroELancar(erro){
    //throw é o comando responsável por lançar o erro
    throw new Error('..');
}

function imprimirNomeGritado(obj){
    /**
     * Bloco try tenta executar um código que é passível de erro,
     * caso nao seja possível sua execução ele assume que aconteceu
     * um erro e chama o catch.
     */
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } 
    /**
     * Bloco catch é o responsável por executar uma rotina de tratamento do erro
     * ao pode capturar o erro e então podemos exibi-lo.
     */
    catch(e){
        //Neste exemplo o catch chama uma função
        tratarErroELancar(e)
    } 
    //Bloco Finally é executado mesmo caso houver um erro na aplicação
    finally{
        console.log('final');
    }
    
}

const obj = {nome: 'Roberto'};
imprimirNomeGritado(obj);