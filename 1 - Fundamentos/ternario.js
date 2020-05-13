/**
 * 
 * O operador ternário possui três elementos:
 * 'Teste lógico' ? 'Resultado Verdadeiro' : 'Resultado Falso'
 */
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.1));
console.log(resultado(6.7));