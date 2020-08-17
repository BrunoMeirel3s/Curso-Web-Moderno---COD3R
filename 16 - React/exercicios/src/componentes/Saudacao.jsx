import React, {Component} from 'react'

export default class Saudacao extends Component{
    /**
     * Por padrão não podemos mudar valores nos elementos
     * como o value de um input diretamente, para isso usamo
     * o state, onde mudamos os valores das variáveis que estão
     * em state e assim mudamos os valores nos elementos como input
     * e outros
     */
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    constructor(props){
        super(props)
        //bind é usado para mudar o contexto de execução de uma função
        //no exemplo abaixo forçamos setTipo a ser executada no contexto
        //da função saudação que o this atual
        this.setTipo = this.setTipo.bind(this)
        
    }
    //setTipo será invocada quando houver uma mudança no input tipo
    setTipo(e){
        this.setState({tipo: e.target.value})//setState é utilizado para mudar o estado da variável tipo
    }

    setNome(e){
        this.setState({nome: e.target.value})//setState é utilizado para mudar o estado da variável nome
    }

    render(){
        /**
         * Abaixo estamos desestroturando tipo e nome
         * de this.props que é os atributos passados
         * para um component de classe, this é o objeto
         * que tiver extansiando a classe e props são
         * os parametros
         */
        const {tipo, nome} = this.state
        return(
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                
                <input type="text" placeholder="Tipo..."
                value={tipo} onChange={this.setTipo}/>

                <input type="text" placeholder="Nome..." 
                value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}