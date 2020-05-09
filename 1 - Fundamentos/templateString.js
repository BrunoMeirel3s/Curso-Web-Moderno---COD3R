const nome = 'Rebeca';
const concatenacao = 'Olá '+ nome + '!';
/**
 * Template string utiliza o " ` ` " para delimitar
 * que dentro desta área iremos trabalhar com textos
 * e podemos utilizar o "${}" para criar expressões matemáticas
 * ou chamadas de funções
 */
const template = `
    Olá
    ${nome}!
`;

console.log(concatenacao, template);

//expressões...
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase();

console.log(`Ei... ${up('Cuidado')}!`);