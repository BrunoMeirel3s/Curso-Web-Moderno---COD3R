
/**
 * Variáveis do tipo var podem sofrer o efeito
 * de hoisting, onde mesmo antes de serem declaradas
 * já podem ser chamadas, porém o valor fica como
 * undefined
 */
console.log('a = ', a);
var a = 2;
console.log('a = ', a);

/**
 * o mesmo efeito não acontece com variáveis do
 * tipo let, sendo assim, ao tentar chamar 
 * a variável antes de declarar, será exibido um erro
 */
console.log('b = ', b);
let b = 2;
console.log('b = ', b);