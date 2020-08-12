import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/button'
import Display from '../components/display'

//objeto criado para armazernar os estados inicias, como valor do display, valor atual, e outros
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component{

    state = {...initialState}//state recebe todos os atributos de initialState

    constructor(props){
        super(props)//necessário para iniciar os atributos

        //lembrando que usamos o código abaixo para forçar que o this.function aponte para o local correto
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory(){
        //ao executar clearMemory o state é setado para o estado original
        this.setState({...initialState})
    }

    //quando entrar no set operation espera-se que o primeiro valor já tenha sido digitado na calculadora
    setOperation(operation){
        //verifica se o vetor de valores está na posição 1 se sim executa o código
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay: true})
        }else {
            //se a operação atual for igual a '=' equal recebe true
            const equals = operation === '='

            //currentOperation recebe a operação atual sem ser o '='
            const currentOperation = this.state.operation

            //values recebe um spread do values contido no state
            const values = [...this.state.values]
            try{
                //values[0] = Número 1 - Operação - Número 2 (Ex: values[0]= 2 + 2)
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)    
            }catch(e){
                values[0] = this.state.values[0]
            }
            //após colocar o resultado da operação em values[0], values[1] é zerado
            values[1] = 0

            //após as operações precisamos setar os valores no state para então mudar na página
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0:1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n){
        //se já existir um '.' no display ao clicar no . não será adicionado outro ponto
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }
        /**
         * clearDisplay recebe a solução do teste lógico que verifica se o
         * displayValue atual é '0' ou se clearDisplay está setado como true
         * sendo assim caso um dos testes seja true clear display será true
         */
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay

        //currentValue verifica se clearDisplay está true se sim current value recebe vazio ou recebe o valor que está no display
        const currentValue = clearDisplay ? '' : this.state.displayValue

        //displayValue recebe current value + o novo valor digitado
        const displayValue = currentValue + n

        //após isso é setado os valores de displayValue e de clearDisplay
        this.setState({displayValue, clearDisplay: false})

        if(n != '.'){
            const i = this.state.current

            //newValue recebe o parse de displayValue o que transforma String para Float
            const newValue = parseFloat(displayValue)

            //values recebe uma cópia dos values que estão em state
            const values = [...this.state.values]
            values[i] = newValue

            //após o processamento dos valores os mesmos são setados em state
            this.setState({values})
        }
    }
    render(){
        
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/"click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8"click={this.addDigit}/>
                <Button label="9"click={this.addDigit}/>
                <Button label="*"click={this.setOperation} operation/>
                <Button label="4"click={this.addDigit}/>
                <Button label="5"click={this.addDigit}/>
                <Button label="6"click={this.addDigit}/>
                <Button label="-"click={this.setOperation} operation/>
                <Button label="1"click={this.addDigit}/>
                <Button label="2"click={this.addDigit}/>
                <Button label="3"click={this.addDigit}/>
                <Button label="+"click={this.setOperation} operation/>
                <Button label="0"click={this.addDigit} double/>
                <Button label="."click={this.addDigit}/>
                <Button label="="click={this.setOperation} operation/>

            </div>
            )
        
    }
}