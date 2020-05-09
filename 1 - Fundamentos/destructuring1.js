//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
/**
 * O operador de desestruturação deixa disponíveis
 * variáveis que estão dentro de objetos e funções
 * assim podemos chama-las durante código de forma
 * mais fácil
 */
const{nome, idade} = pessoa;
console.log(nome, idade);

//podemos renomear estar variáveis
const { nome: n, idade: i} = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco:{ logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep)
