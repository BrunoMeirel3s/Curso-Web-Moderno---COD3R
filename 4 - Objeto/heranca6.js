/**
 * Função construtora, lembrando que usamos o this
 * para que quando seja criado um objeto usando a função
 * this este objeto possa referenciar os seus próprios
 * atributos na hora de atribuir o valor
 */
function Aula(nome, videoId){
    this.nome = nome;
    this.videoId = videoId;
}

const aula1 = new Aula('Bem vindo', 123);
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//simulando o new
/**
 * Recebe uma função e os parametros via spread
 */
function novo(f, ...params){
    const obj = {}//cria um obj
    obj.__proto__ = f.prototype //faz o objeto herdar da função
    f.apply(obj, params)//aplica os parametros no objeto
    return obj // retorna o objeto já com os parametros
}

const aula3 = novo(Aula,'Bem vindo', 123)
const aula4 = novo(Aula,'Até breve', 456)
console.log(aula3, aula4)