// Object.preventExtensions
/**
 * Prevent extensions previne que sejam adicionados
 * novos atributos a para o objeto, porém podemos 
 * excluir e mudar o valores dos atributos antigos
 */
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
/**
 * Seal não permite que o objeto receba novos atributos
 * e nem que tenha seus atributos excluídos, porém podemos
 * mudar o valor dos atributos antigos
 */
const pessoa = {nome:'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenoe = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa)

//Object.freeze = selado + valores constantes