for(var i = 0; i<10; i++){
    console.log(i);
}
/**
 * Por não possuir escopo de bloco mesmo em um for
 * a variável do tipo var permanece disponível
 * em todo o escopo do código
 */
console.log('i = ', i);