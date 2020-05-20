//Podemos usar functions para criar o conceito de função
//construtora!
function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    /**
     * utilizando o let a variável será disponível somente
     * dentro desta função e somente poderá ser consultada
     * ou alterada fora desta função utilizando um método get e ou setter
     */
    let velocidadeAtual = 0;

    //método público
    /**
     * Para criar métodos públicos podemos utilizar o this
     * que informa que essa função ficará disponível para o
     * escopo principal do documento
     */
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //método público
    /**
     * Podemos utilizar um método público para retornar
     * uma variável privada, igual o método get de JAVA
     */
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
};

/**
 * const uno = new Carro() cria uma instância de Carro()
 * essa instância herda todos os métodos e atributos, podendo
 * utilizá-los.
 */

const uno = new Carro()
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
