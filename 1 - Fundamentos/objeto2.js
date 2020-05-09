//O Object em JS é uma função
console.log(typeof Object);
//A instância de Object é um objeto
console.log(typeof new Object);

const Cliente = function(){};
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto{} //ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto());