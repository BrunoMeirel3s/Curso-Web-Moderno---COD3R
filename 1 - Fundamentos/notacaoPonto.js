/**
 * A notação ponto é utilizada para acessar membros
 * de objetos e funções, função  de um objeto e outros
 */
console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
//obj1['nome'] = 'Bola 2'
console.log(obj1.nome);

function Obj(nome){
    /**
     * this neste caso indica que essa variável
     * ficará disponível para quem instânciar esse
     * objeto
     */
    this.nome = nome;
    this.exec = function(){
        console.log('Exec.....')
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();