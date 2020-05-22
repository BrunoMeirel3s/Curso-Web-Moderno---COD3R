const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//retorna as chaves
console.log(Object.values(pessoa))//retorna os valores
console.log(Object.entries(pessoa))//retorna chave e valor

/**
 * Object.entries retorna chave e valor, sendo assim
 * podemos usar um forEach para percorrer o array
 */
Object.entries(pessoa).forEach(([chave, valor]) => { //([chave/valor]) é o operador destructuring 
    console.log(`${chave}: ${valor}`)
})


/**
 * Object.defineProperty permite definir propriedades de um atributo do objeto,
 * enumerable permite ou não o objeto ser listado em uma busca,
 * writable permite ou não o objeto ser reescrito,
 * value é o valor o atributo
 */
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa));

//Object.assign (ECMAScript 2015)
/**
 * Object.assign une objetos, juntando seus atributos,
 * um objeto destino recebe os atributos dos outros objetos
 * caso possuam atributos de mesmo nome o valor será substituido
 * pelo último valor válido
 */
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c:3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(dest)

Object.freeze(obj);
obj.c = 1234
console.log(dest)