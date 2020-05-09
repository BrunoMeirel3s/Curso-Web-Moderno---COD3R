var numero = 1;

{
    var numero = 2;
    console.log('dentro = ', numero);
}

/**
 * Exemplo em questão reforça que variáveis do tipo
 * var não possuem escopo do tipo bloco, sendo
 * impressora o número 2 duas vezes.
 */
console.log('fora = ', numero);