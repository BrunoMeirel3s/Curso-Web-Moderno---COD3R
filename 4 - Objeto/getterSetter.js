const sequencia = {
    _valor: 1, //Convenção de que a variável é privada
    get valor() { return this._valor++},
    set valor(valor){ 
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

/**
 * Ao utilizar sequencia.valor ele está chamando
 * não pelo atributo _valor mas sim pelo método
 * de get e set automaticamente.
 */
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);