<template>
    <div class="category-admin">
        <b-form>
            <input id="category-id" type="hidden" v-model="category.id" />
            <b-form-group label="Nome:" label-for="category-name">
                <b-form-input id="category-name" type="text"
                    v-model="category.name" required
                    :readonly="mode === 'remove'"
                    placeholder="Informe o Nome da Categoria..." />
            </b-form-group>
            <b-form-group label="Categoria Pai:" label-for="category-parentId">
                <b-form-select v-if="mode === 'save'"
                    id="category-parentId"
                    :options="categories" v-model="category.parentId" />
                <b-form-input v-else
                    id="category-parentId" type="text"
                    v-model="category.path"
                    readonly />
            </b-form-group>
            <!--
                Botões abaixo apenas são visíveis quando os modos forem save ou remove, o modo remove
                o mesmo é chamado quando clicamos no botão de remover na tabela com os valores
            -->
            <b-button variant="primary" v-if="mode === 'save'"
                @click="save">Salvar</b-button>
            <b-button variant="danger" v-if="mode === 'remove'"
                @click="remove">Excluir</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-form>
        <hr>
        <b-table hover striped :items="categories" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
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
    name: 'CategoryAdmin',
    data: function() {
        return {
            mode: 'save',
            category: {},
            categories: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'path', label: 'Caminho', sortable: true },
                { key: 'actions', label: 'Ações' }
            ]
        }
    },
    methods: {
        /**
         * loadCategories é o método utilizado para listar as categorias do backend,
         * é realizado uma requisição para o backend que retorna as categorias cadastradas,
         * nesse retorno this.categories recebe um retorno de um map realizado em cima
         * de res.data, nesse map é retornado todos os campos de category que é o próprio vetor sem o map
         * mais o value que é category.id e text que é category.path
         */
        loadCategories() {
            const url = `http://localhost:3000/categories`
            axios.get(url).then(res => {
                // this.categories = res.data
                this.categories = res.data.map(category => {
                    return { ...category, value: category.id, text: category.path }
                })
            })
        },
        //método utilizado para limpar os campos do formulário
        reset() {
            this.mode = 'save'
            this.category = {}
            this.loadCategories()
        },

        /**
         * save é utilizado para salvar ou atualizar um artigo no banco de dados, primeiramente é identificado
         * se o atributo category.id está setado, se sim o método http será do tipo put, senão estiver setado o category.id
         * significa que se trata de uma categoria nova, desta forma iremos utilizar o método post para envio de formulário
         */
        save() {
            const method = this.category.id ? 'put' : 'post'//verifica qual método utilizar

            //se category.id estiver setado utilizamos na const id a string '/${this.article.id} senão a const id fica em branco
            const id = this.category.id ? `/${this.category.id}` : ''

            //axios realiza o put ou post na url informada abaixo passando os atributos do objeto this.category
            axios[method](`http://localhost:3000/categories${id}`, this.category)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        /**
            axios.delete envia um comando de delete a url informada, como nosso backend já está esperando
            receber algo nesta url ele irá analisar o id passado para buscar a categoria de id passada e então irá realizar o
            delete da categoria em questão.
         */
        remove() {
            const id = this.category.id
            axios.delete(`http://localhost:3000/categories/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        //loadCategory é utilizado no botão de edição e exclusão quando é listado as categorias no frontEnd
        //dessa forma é possível visualizar os dados antes de editar ou excluir
        loadCategory(category, mode = 'save') {
            this.mode = mode
            this.category = { ...category }
        }
    },
     //mounted executa as funções abaixo assim que a página carregar, desta forma já teremos esses valores disponíveis para trabalhar
    mounted() {
        this.loadCategories()
    }
}
</script>

<style>

</style>