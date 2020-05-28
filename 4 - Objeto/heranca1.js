const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

/**
 * __proto__ mostra quem é a função da qual ferrari
 * herda os seus atributos, lembrando que objetos não
 * possuem prototype, apenas __proto__
 */
console.log(ferrari.__proto__);

/**
 * ferrari herda de Object que é a classe mais abstrata
 * de um objeo, o atributo prototype é qual obtém todos
 * os atributos que são herdados pelos objetos, sendo assim
 * a herança dos objetos é feita diretamento com o prototype
 * das funções
 */
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); 

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)