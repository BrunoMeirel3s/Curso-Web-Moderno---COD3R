<template>
    <!-- Página principal onde ficará listando os artigos a serem exibidos de acordo
        com a categoria selecionada no menu lateral esquerdo da aplicação
    -->
  <div class="articles-by-category">
      <!--
          Abaixo chamamos o componente ArticleItem que irá renderizar os artigos separadamente para
          serem exibidos no frontEnd.
          No componente PageTitle passamos o category.name para exibir o nome da categoria ao qual os
          artigos fazem parte, sub recebe o texto Categoria
      -->
      <PageTitle icon="fa fa-folder-o"
        :main="category.name" sub="Categoria"/>

        <ul>
            <!--
                Para listar os artigos realizamos um for em cima de articles e passamos cada artigo
                como parametro para ArticleItem que é o componente importado, desta forma temos
                uma representação visual do conteúdo do artigo
            -->
            <li v-for="article in articles" :key="article.id">
                <ArticleItem :article="article"/>
            </li>
        </ul>
        <!--
            O botão abaixo carrega os demais artigos chamando a função getArticles
        -->
        <div class="load-more">
            <button v-if="loadMore" 
                class="btn bt-lg btn-outline-primary"
                @click="getArticles"> Carregar mais Artigos</button>
        </div>
  </div>
</template>

<script>
const baseApiUrl = 'http://localhost:3000'
import axios from 'axios'
import PageTitle from '../template/PageTitle'
import ArticleItem from './ArticleItem'
export default {
    name: 'ArticlesByCategory',
    components: { PageTitle, ArticleItem },
    data: function(){
        return {
            category: {},
            articles: [],
            page: 1,//página para ser exibida com o resultado da busca dos artigos
            loadMore: true
        }
    },
    methods: {
        /**
            Método getCategory realiza a busca de uma categoria com base no id
            da mesmo, após a requisição em cima da url o retorno é armazenado
            em this.category
         */
        getCategory(){
            const url = `${baseApiUrl}/categories/${this.category.id}`
            axios(url).then(res => this.category = res.data)
        },
        /**
            getArticles realiza a uma requisição e cima do link de categories, listando
            os artigos de cada categoria por isso usamos this.category.id na url abaixo, o atributo
            this.page representa qual a página deve ser chamada com o resultado da busca, como a busca
            esta sendo limitada de 10 em 10 por exemplo precisamos informar para o backend qual a 
            página deve ser mostrado da busca
         */
        getArticles(){
            const url = `${baseApiUrl}/categories/${this.category.id}/articles?pages=${this.page}`
            axios(url).then(res => {
                //a cada chamada de getArticles é acrescentado novos artigos a articles
                this.articles = this.articles.concat(res.data)
                this.page++//a cada chamada de getArticles page recebe "page = page +1"

                //o botão de carregar mais é desabilitado caso res.data seja vazio
                if(res.data.length === 0) this.loadMore = false
            })
        }
    },
    /**
     * método watch irá monitorar as mudanças realizadas nos atributos abaixos
     * bem como a utilização dos métodos getCategory e getArticles
     */
    watch:{
        $route(to){
            this.category.id = to.params.id
            this.articles = []
            this.page = 1
            this.loadMore = true

            this.getCategory()
            this.getArticles()
        }
    },
    /**
     * Ao iniciar este componente é automaticamente definido que this.category.id recebe
     * o id passado durante o chamamento da rota que trás até ArticlesByCategory, desta forma
     * podemos utilizar as funções como getCategory e getArticles pois precisaremos
     * do id da categoria
     */
    mounted(){
        this.category.id = this.$route.params.id
        this.getCategory()
        this.getArticles()
    }   
}
</script>

<style>
    .articles-by-category ul{
        list-style-type: none;
        padding: 0px;
    }

    .articles-by-category .load-more{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
    }
</style>