<template>
    <div class="article-admin">
        <b-form>
            <input id="article-id" type="hidden" v-model="article.id" />
            <b-form-group label="Nome:" label-for="article-name">
                <!--
                    o comando v-model faz com que o input em questão receba e insira valores
                    na variável informada, então sempre que houverem alterações na variável
                    a mesma será atualizada tanto no front quanto no back, o required informa 
                    que este campo é obrigatório, o readonly é ativado para o campo abaixo
                    caso o mode seja igual a remove
                -->
                <b-form-input id="article-name" type="text"
                    v-model="article.name" required
                    :readonly="mode === 'remove'"
                    placeholder="Informe o Nome do Artigo..." />
            </b-form-group>
            <b-form-group label="Descrição" label-for="article-description">
                <b-form-input id="article-description" type="text"
                    v-model="article.description" required
                    :readonly="mode === 'remove'"
                    placeholder="Informe o Nome do Artigo..." />
            </b-form-group>
            <!--
                v-if faz com que o campo seja mostrado apenas caso a condição seja verdadeira
            -->
            <b-form-group v-if="mode === 'save'"
                label="Imagem (URL):" label-for="article-imageUrl">
                <b-form-input id="article-imageUrl" type="text"
                    v-model="article.imageUrl" required
                    :readonly="mode === 'remove'"
                    placeholder="Informe a URL da Imagem..." />
            </b-form-group>
            <b-form-group v-if="mode === 'save'" 
                label="Categoria:" label-for="article-categoryId">
                <b-form-select id="article-categoryId"
                    :options="categories" v-model="article.categoryId" />
            </b-form-group>
            <b-form-group v-if="mode === 'save'" 
                label="Autor:" label-for="article-userId">
                <b-form-select id="article-userId"
                    :options="users" v-model="article.userId" />
            </b-form-group>
            <b-form-group v-if="mode === 'save'"
                label="Conteúdo" label-for="article-content">
                <VueEditor v-model="article.content"
                    placeholder="Informe o Conteúdo do Artigo..." />
            </b-form-group>
            <b-button variant="primary" v-if="mode === 'save'"
                @click="save">Salvar</b-button>
            <b-button variant="danger" v-if="mode === 'remove'"
                @click="remove">Excluir</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-form>
        <hr>
        <!--
            hover striped adiciona o efeito zebrado a tabela, em itens é definido que os 
            valores a serem exibidos serão do vetor articles, em fields é ajustado os nomes
            das colunas a serem exibidos
        -->
        <b-table hover striped :items="articles" :fields="fields">
            <template slot="actions" slot-scope="data">
                <!--
                    Botões de exclusão e edição dos artigos listados, observe que é chamado a função
                    loadArticle no método @click do botão, passando como parametro vazio ou remove
                    para excluir o valor inserido
                -->
                <b-button variant="warning" @click="loadArticle(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadArticle(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="limit" />
    </div>
</template>

<script>
//vueEditor é um componente utilizado para edição de texto
import { VueEditor } from "vue2-editor"
import { baseApiUrl, showError } from '@/global'
//axios é quem realiza as requisições nas urls do backend e nos devolve a informação enviada
import axios from 'axios'

export default {
    name: 'ArticleAdmin',
    components: { VueEditor },
    //no data devemos registrar todas as variáveis que iremos utilizar nesta página
    //para acessar esses valores dentro do javascript sempre utilizamos o this para referenciar
    data: function() {
        return {
            mode: 'save',
            article: {},
            articles: [],
            categories: [],
            users: [],
            page: 1,
            limit: 0,
            count: 0,
            //fields é utilizado como forma de personalizar os campos da tabela que possuimos nesta página
            //desta forma pegamos as key e trocamos o valor pelo label
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'description', label: 'Descrição', sortable: true },
                { key: 'actions', label: 'Ações' }
            ]
        }
    },
    ///methods são os métodos que podemos utilizar dentro da página, inclusive podemos chamar a execução de métodos
    //direto pela url, isso que nos permite criar usuários, realizar filtros e outras funcionalidades no frontEnd
    methods: {
        //loadArticles realiza uma requisião para o backend e retorna todos os artigos cadastrados
        loadArticles() {
            //nesta url page informa qual a página atual que iremos mostrar pois estamos limitando a quantidade de artigos
            //a serem listados de uma vez no frontEnd
            const url = `http://localhost:3000/articles?page=${this.page}`
            /**
             * axios realiza a requisição na url e recebe o retorno como res.data, desta forma podemos 
             * inserir nas nossas variáveis marcadas com o this os valores retornados do backend
             */
            axios.get(url).then(res => {
                this.articles = res.data.data
                this.count = res.data.count
                this.limit = res.data.limit
            })
        },
        /**
         * reset() é utilizado para limpar os campos no frontEnd, desta forma alteramos a variável mode para save,
         * limpamos a variável article e por fim chamamos a função loadArticles para recarregar os artigos no frontEnd
         */
        reset() {
            this.mode = 'save'
            this.article = {}
            this.loadArticles()
        },

        /**
         * save é utilizado para salvar ou atualizar um artigo no banco de dados, primeiramente é identificado
         * se o atributo article.id está setado, se sim o método http será do tipo put, senão estiver setado o article.id
         * significa que se trata de um artigo novo, desta forma iremos utilizar o método post para envio de formulário
         */
        save() {
            const method = this.article.id ? 'put' : 'post' //verifica qual método utilizar

            //se article.id estiver setado utilizamos na const id a string '/${this.article.id} senão a const id fica em branco
            const id = this.article.id ? `/${this.article.id}` : ''

            //axios realiza o put ou post na url informada abaixo passando os atributos do objeto this.article
            axios[method](`http://localhost:3000/articles${id}`, this.article)
                .then(() => {
                    //.then é chamado após realização do put ou post, o toasted abaixo é uma notificação que será exibida no front
                    this.$toasted.global.defaultSuccess()
                    this.reset()//reset limpa o formulário
                })
                .catch(showError)
        },
        /**
            axios.delete envia um comando de delete a url informada, como nosso backend já está esperando
            receber algo nesta url ele irá analisar o id passado para buscar o artigo de id passada e então irá realizar o
            delete do artigo em questão.
         */
        remove() {
            const id = this.article.id
            axios.delete(`http://localhost:3000/articles/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        /**
            método utilizado para listar os artigos quando clicarmos no botão de edição, 
            é realizado uma requisição para a url de artigos informando o id do artigo e o retorno
            é armazenado em this.article que automaticamente altera os valores dos campos no frontEnd
         */
        loadArticle(article, mode = 'save') {
            this.mode = mode
            axios.get(`http://localhost:3000/articles/${article.id}`)
                .then(res => this.article = res.data)
        },
        /**
         * loadCategoies realizar uma requisição para a url de categorias que por sua
         * vez retorna todas as categorias cadastradas, após isso this.categories que é um vetor
         * recebe o resultado de um map em cima do res.data que é o resultado retornado
         * pela requisição ao backend, no map é retornado o value que é o user.id e o text que é o path da categoria
         */
        loadCategories() {
            const url = `http://localhost:3000/categories`
            axios.get(url).then(res => {
                this.categories = res.data.map(category => {
                    return { value: category.id, text: category.path }
                })
            })
        },

        /**
         * loadUsers funciona igual ao loadCategories, ele realiza a requisição de todos os usuários
         * cadastrados no backEnd e após isso this.users que é um vetor recebe o retorno
         * de um map realizado em cima de res.data, esse retorno do map é o value que é o user.id e 
         * o text que é um interpolação do user.name e o user.email, ambos os valores serão exibidos
         * no frontEnd
         */
        loadUsers() {
            const url = `http://localhost:3000/users`
            axios.get(url).then(res => {
                this.users = res.data.map(user => {
                    return { value: user.id, text: `${user.name} - ${user.email}` }
                })
            })
        }
    },
    //watch é utilizado para visualizar a página e executar determinadas ações caso houverem alteraçãoes na mesma, abaixo apenas executamos uma função
    watch: {
        page() {
            this.loadArticles()
        }
    },
    //mounted executa as funções abaixo assim que a página carregar, desta forma já teremos esses valores disponíveis para trabalhar
    mounted() {
        this.loadUsers()
        this.loadCategories()
        this.loadArticles()
    }
}
</script>

<style>

</style>