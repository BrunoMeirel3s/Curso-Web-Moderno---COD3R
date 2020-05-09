let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//'!!' pode ser usado para verificar se uma string ou numeral apresenta valor positivo ou negativo
isAtivo = 1;
console.log(!!isAtivo);

//'0' é o único numeral que apresenta valor booleano false
isAtivo = 0;
console.log(!!isAtivo);

console.log(`Os verdadeiros...`)
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log(`Os falsos...`)
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log(`Para finalizar...`)
console.log(!!('' || null || 0 || 'epa'));

let nome = "";

console.log(nome || 'Desconhecido');