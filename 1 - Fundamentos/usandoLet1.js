var numero = 1;

{
    /**
     * Variáveis do tipo let possuem escopo de bloco,
     * funcão e global
     */
    let numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);