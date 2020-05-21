//IIFE -> Immediately Invoked Function Expression

/**
 * Essa síntaxe de construção da função abaixo faz com 
 * que todo o código dentro da função seja executado
 * automaticamente o abrir o script porém o mesmo não
 * fica disponível em escopo global
 */
(function(){
    console.log('Será executada na hora!');
    console.log('Foge do escopo mais abrangente!')
})()