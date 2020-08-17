import React, {component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
import { Component } from 'react'

/**
 * headerProps será usado para definir os parâmetros padrões para serem utilizados
 * no main
 */
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

//url que iremos usar para o banco
const baseUrl = 'http://localhost:3001/users'

//estado inicial contendo os atributos dos usuários
const initialState ={
    user: {name: '', email: ''},
    list: []
}
export default class UserCrud extends Component{

    state = { ...initialState}

    componentWillMount(){
        axios(baseUrl).then( resp => {
            this.setState({list: resp.data})
        })
    }

    //função que será responsável por limpar o formulário
    clear(){
        this.setState({ user: initialState.user})
    }

    //função que será responsável por salvar os formulários
    save(){
        const user = this.state.user

        /**
         * caso o id esteja definido significa que iremos atualizar o dado no banco, 
         * sendo assim iremos usar o put, caso o id não esteja definido iremos usar o put
         * pois iremos salvar este usuário
         */
        const method = user.id ? 'put': 'post'

        //url é montada caso o id esteja setado ou iremos usar a url base
        const url = user.id ? `${baseUrl}/${user.id}`: baseUrl

        /**
         * axios é um servidor http, para usa-lo informamos a url
         * método e o dado a ser colocado no banco
         */
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({user:initialState.user, list})
            })
    }

    //função será usada para obter a lista de usuários atualizadas
    getUpdatedList(user, add=true){
        const list = this.state.list.filter(u => u.id !== user.id)
        if(user) list.unshift(user)
        return list
    }

    //função para atualizar a lista de usuários
    updateField(event){
        //const user recebe uma cópia do user presente no state
        const user = {...this.state.user}

        //user(nome que é retornado pelo elemento que queremos atualizar) = value que iremos inserir
        //ex: user[email] = brunomeireles23@gmail.com
        user[event.target.name] = event.target.value

        //para finalizar setamos o valor no estado
        this.setState({user})
    }

    //renderForm é utilizado para renderizar o formulário na tela
    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..."
                                />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                            name="email"
                            value={this.state.user.email}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o e-mail..."/>
                        </div>
                    </div>
                </div>

                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user){
        this.setState({user})
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list})
        })
    }

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>        
        )            
    }

    renderRows(){
        return this.state.list.map(user => {
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render(){
        console.log(this.state.list)
        return(
            <Main {...headerProps}>
                {/**render do formulário que montamos acima */}
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}