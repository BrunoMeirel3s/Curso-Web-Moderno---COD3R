const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

/**
 * O For In cria um índice e ele é utilizado para percorrer
 * vetores, objetos e afins
 */
for(let i in notas){
    console.log(`notas = ${notas[i]}`);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Meireles',
    idade: 24,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}