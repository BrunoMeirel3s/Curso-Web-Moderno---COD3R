const escola = "Cod3r";

//charAt retorna o caracter na posição informada
console.log(escola.charAt(4));
console.log(escola.charAt(5));

//charCodeAt retorna o código na tabela ANSI do caracter na posição informada
console.log(escola.charCodeAt(3));

//indexOf retorna a posição da String que contém o coracter informado
console.log(escola.indexOf('r'));

//substring retorna uma string a partir da posição informada até a quantidade de caracteres também informado
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

//concact realiza a concatenação de strings
console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!");

//replace substitui um caracter por outro: novo, 'antigo'
console.log(escola.replace(3, 'e'));

//split cria um array utilizando o sinal informado como delimitador
console.log("Ana, Maria, Pedro".split(','));