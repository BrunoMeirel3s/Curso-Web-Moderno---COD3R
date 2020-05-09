//Um objeto é uma coleção de chave e valor
const prod1 = {};

//podemos criar atributos dinâmicamente
prod1.nome = 'Celular Ultra Mega ';
prod1.prevo = 4998.90;
prod1['desconto legal'] = 0.40;//evita atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camila Polo',
    preco: 79.70,
};

console.log(prod2);