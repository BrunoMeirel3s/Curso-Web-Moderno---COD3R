/**
 * O '==' leva em consideração apenas o valor da variável,
 * portanto variáveis de tipos diferentes podem ser comparadas
 * e apresentarão resultado positivo se apresentarem valores
 * iguais
 */
console.log('01)', '1' == 1);

/**
 * O '===' compara não somente os valores mas também o tipo
 * da variável, sendo assim é mais rígido só dando positivo
 * caso as variáveis sejam igual em tipo e valor
 */
console.log('02)', '1' === 1);
console.log('3)', '3' != 3);
console.log('4)', '3' !== 3);

console.log('5)', 3< 2);
console.log('6)', 3> 2);
console.log('7)', 3 <= 2);
console.log('8)', 3 >= 2);

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() == d2.getTime());

console.log('12)', undefined == null);
console.log('13)', undefined === null);
