function Pessoa(){
    this.idade = 0

    setInterval(()=>{

        /**
         * Utilizando arrow function não mais faz-se
         * necessário a utilização do bind ou da constante
         * self para armazenar o contexto de execução
         */
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa