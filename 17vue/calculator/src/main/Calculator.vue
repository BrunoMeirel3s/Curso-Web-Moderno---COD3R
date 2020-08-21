<template>
  <div class="calculator">
      <Display :value="displayValue"/>
      <Button label="AC" triple @onclick="clearMemory"/>
      <Button label="/" operation @onclick="setOperation"/>
      <Button label="7" @onclick="addDigit"/>
      <Button label="8" @onclick="addDigit"/>
      <Button label="9" @onclick="addDigit"/>
      <Button label="*" operation @onclick="setOperation"/>
      <Button label="4" @onclick="addDigit"/>
      <Button label="5" @onclick="addDigit"/>
      <Button label="6" @onclick="addDigit"/>
      <Button label="-" operation @onclick="setOperation"/>
      <Button label="1" @onclick="addDigit"/>
      <Button label="2" @onclick="addDigit"/>
      <Button label="3" @onclick="addDigit"/>
      <Button label="+" operation @onclick="setOperation"/>
      <Button label="0" double @onclick="addDigit"/>
      <Button label="." @onclick="addDigit"/>
      <Button label="=" operation @onclick="setOperation"/>

  </div>
</template>

<script>

import Display from "../components/Display"
import Button from "../components/Button"

export default {
    //data é onde fica as constantes que serão utilizadas no código
    data:function(){
        return{
            displayValue:"0",
            clearDisplay:false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    //após importar os componentes é necessário registrálos como abaixo:
    components:{Button, Display },
    methods:{
        clearMemory(){
            //função do VueJs abaixo estamos fazendo o objeto voltar ao seu estado original
            Object.assign(this.$data, this.$options.data())
        },

        setOperation(operation){
            //verifica se estamos no current 0 o que significa que ainda estamos digitando o primeiro valor
            if(this.current === 0 ){
                //lembrando que quando usamos o this na frente da constante estamos invocando a constante presente em data:function()
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                //se a operação for '=' iremos armazenar um true para utilizar para limpar ou não o display
                const equals = operation === "="
                const currentOperation = this.operation

                try{
                    //eval realiza a execução de uma expressão javascript, abaixo estamos realizando o cálculo utilizando os valores e a operação
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                } catch(e){
                    //$emit é utilizado para emitir o erro que pode ser tratado por quem utilizar o componente calculator
                    this.$emit('onErro', e)
                }

                //ao realizar o cálculo retornamos values[1] = 0 para depois se for o caso realizar novos cálculos
                this.values[1] = 0

                //o valor exibido no display recebe o resultado da operação matematica entre os dois valores
                this.displayValue = this.values[0]
                //se a operação for '=' não terá outra operação, senão this.operation será = operation
                this.operation = equals ? null: operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals//limpará o display se escolhermos outra operação matemática que não seja '='
            }
        },
        addDigit(n){
            //verifica se o valor do display já possue '.' se sim não digita outro
            if(n === "." && this.displayValue.includes(".")){
                return
            }

            //limpa o display se no display estiver '0' ou se clearDisplay estiver true
            const clearDisplay = this.displayValue === "0"
                || this.clearDisplay
            //currentValue recebe "vazio" se clearDisplay estiver true ou recebe o this.displayValue
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n // displayValue recebe o valor atual do display + novo valor

            this.displayValue = displayValue//atribui o valor atual do display ao this.displayValue que armazena em data:function()
            this.clearDisplay = false

            if(n != "."){
                //se n for diferente de '.' iremos armazenar o valor do display em this.values[i]
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }
        }
    }
}
</script>

<style>
.calculator{
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>