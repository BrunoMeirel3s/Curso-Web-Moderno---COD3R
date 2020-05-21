function getPreco(imposto = 0, moeda = 'R$'){
    //this nesse caso permite que a instância que chamar
    //esta função tenha acesso aos valores passados
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.20};
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

/**
 * Call e Apply invocam uma função passando como
 * parâmetro um objeto e os parâmetros a serem utilizados
 * porém a forma como é enviado esses parâmetros difere
 * como o exemplo abaixo
 */
console.log(getPreco.call(carro, 0.17, '$'));
console.log(getPreco.apply(carro, [0.17, '$']));