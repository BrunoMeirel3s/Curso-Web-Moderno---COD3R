//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' // não faça isso
const avo = { attr1: 'A'}

/**
 * "__proto__:" permite escolher a função ou constante do qual iremos
 * herdar os atributos
 */
const pai = { __proto__: avo, attr2: 'B', attr3: '3'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        /**
         * this é usado para permitir que objetos que
         * herdem de carro possam usar seus próprios
         * atributos quando chamam funçõs herdadas
         */
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    }, 
    status(){
        return `${this.velAtual} Km/h de ${this.velMax}Km`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    /**
     * status() sobreescreve a função status() da
     * função carro, porém podemos ainda chamar a função
     * status de carro utilizar o super na hora de chamar
     */
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

/**
 * Object.setPrototypeOf permite escolher de onde
 * o objeto irá herdar seus atributos
 */
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro);

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())