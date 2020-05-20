//Factory simples
/**
 * Funções construtoras retornam a criação de objetos
 * sendo assim podemos utilizar quando formos criar diversos
 * objetos diferentes utilizando os mesmos atributos básicos
 */

function criarProduto(nome, preco ){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('iPhone', 5000));
console.log(criarProduto('iPad', 1200));

console.log(typeof criarProduto());