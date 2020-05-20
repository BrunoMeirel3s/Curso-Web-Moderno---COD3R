function Pessoa(){
    this.idade = 0;

    /**
     * podemos também criar uma constante que armazena
     * o this atual, sendo assim ele armazena o estado atual
     * de execução, sendo assim outras funções dentro
     * da função Pessoa() podem usar a constante para chamar
     * os métodos e atributos, garantindo que tudo rode
     * no mesmo contexto de execução
     */
    const self = this;//armazena o contexto de execução

    setInterval(function(){
        self.idade++;
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa