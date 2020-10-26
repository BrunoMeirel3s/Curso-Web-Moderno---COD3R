<template>
    <div class="user-admin">
        <b-form>
            <!-- type hidden torna o campo invisível no front porém seu valor fará parte do ação de salvar
                 o formulário. v-model insere o valor de user.id ao input isso acontece ao clicar no botão
                 editar sobre algum valor da tabela, desta forma iremos atualizar o usuário selecionado com base em seu id-->
            <input id="user-id" type="hidden" v-model="user.id" />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="user-name">
                        <b-form-input id="user-name" type="text"
                            v-model="user.name" required
                            :readonly="mode === 'remove'"
                            placeholder="Informe o Nome do Usuário..." />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="E-mail:" label-for="user-email">
                        <b-form-input id="user-email" type="text"
                            v-model="user.email" required
                            :readonly="mode === 'remove'"
                            placeholder="Informe o E-mail do Usuário..." />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-form-checkbox id="user-admin" v-show="mode === 'save'"
                v-model="user.admin" class="mt-3 mb-3">
                Administrador?
            </b-form-checkbox>
            <b-row v-show="mode === 'save'">
                <b-col md="6" sm="12">
                    <b-form-group label="Senha:" label-for="user-password">
                        <b-form-input id="user-password" type="password"
                            v-model="user.password" required
                            placeholder="Informe a Senha do Usuário..." />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirmação de Senha:" 
                        label-for="user-confirm-password">
                        <b-form-input id="user-confirm-password" type="password"
                            v-model="user.confirmPassword" required
                            placeholder="Confirme a Senha do Usuário..." />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs="12">
                    <b-button variant="primary" v-if="mode === 'save'"
                        @click="save">Salvar</b-button>
                    <b-button variant="danger" v-if="mode === 'remove'"
                        @click="remove">Excluir</b-button>
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
        <hr>
        <b-table hover striped :items="users" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadUser(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadUser(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'UserAdmin',
    data: function() {
        return {
            mode: 'save',
            user: {},
            users: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'email', label: 'E-mail', sortable: true },
                { key: 'admin', label: 'Administrador', sortable: true,
                    formatter: value => value ? 'Sim' : 'Não' },
                { key: 'actions', label: 'Ações' }
            ]
        }
    },
    methods: {
        /**
         * loadUsers é o método utilizado para listar os usuários salvos no  backend,
         * é realizado uma requisição para o backend que retorna os usuários cadastrados,
         * nesse retorno this.users recebe o valor retornado do backend
         */
        loadUsers() {
            const url = `http://localhost:3000/users`
            axios.get(url).then(res => {
                this.users = res.data
            })
        },

        //método utilizado para limpar os campos do formulário
        reset() {
            this.mode = 'save'
            this.user = {}
            this.loadUsers()
        },
        /**
         * save é utilizado para salvar ou atualizar um usuário no banco de dados, primeiramente é identificado
         * se o atributo user.id está setado, se sim o método http será do tipo put, senão estiver setado o user.id
         * significa que se trata de uma categoria nova, desta forma iremos utilizar o método post para envio de formulário
         */
        save() {
            const method = this.user.id ? 'put' : 'post'//verifica qual método utilizar

            //se user.id estiver setado utilizamos na const id a string '/${this.user.id} senão a const id fica em branco
            const id = this.user.id ? `/${this.user.id}` : ''

            //axios realiza o put ou post na url informada abaixo passando os atributos do objeto this.user
            axios[method](`http://localhost:3000/users${id}`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()    
                })
                .catch(showError)
        },
         /**
            axios.delete envia um comando de delete a url informada, como nosso backend já está esperando
            receber algo nesta url ele irá analisar o id passado para buscar o usuário de id passada e então irá realizar o
            delete do usuário em questão caso não sejam encontrados artigos no nome do usuário
         */
        remove() {
            const id = this.user.id
            axios.delete(`http://localhost:3000/users/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        //loadUser é utilizado no botão de edição e exclusão quando é listado os usuários no frontEnd
        //dessa forma é possível visualizar os dados antes de editar ou excluir
        loadUser(user, mode = 'save') {
            this.mode = mode
            this.user = { ...user }
        }
    },
    //mounted executa as funções abaixo assim que a página carregar, desta forma já teremos esses valores disponíveis para trabalhar
    mounted() {
        this.loadUsers()
    }
}
</script>

<style>

</style>
