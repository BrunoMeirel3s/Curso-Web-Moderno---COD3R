<template>
  <div class="article-by-id">
      <!--
          PageTitle é um componenteque recebe como parametros main que é o nome do artigo e sub
          que é a descrição do artigo em si.
          A div de class article-content é a que exibe o conteúdo html do artigo selecionado
          por id          
      -->
      <PageTitle icon="fa fa-file-o" :main="article.name" :sub="article.description" />
      <div class="article-content" v-html="article.content"></div>
  </div>
</template>

<script>
const baseApiUrl = 'http://localhost:3000'
import axios from 'axios'
import PageTitle from '../template/PageTitle'
import 'highlightjs/styles/dracula.css'
import hljs from 'highlightjs/highlight.pack.js'
export default {
    name: 'ArticleById',
    components: {PageTitle}, //componente que permite criar o  titulo da página
    data: function(){
        return{
            article:{}
        }
    },
    /**
        Abaixo pegamos o parametro id passado na url que chamou a execução deste componente, 
        como toda chamada de url passa pelo route chamamos this.$route.params.id
        Após isso o axios realiza a requisição do tipo get na url e retorno é armazenado
        no objeto article
     */
    mounted(){
        const url = `${baseApiUrl}/articles/${this.$route.params.id}`
        axios.get(url).then(res => this.article = res.data)
    },
    //abaixo é selecionado o campo .article-content pre e aplicado o estilo highlightBlock para cada elemento
    updated(){
        document.querySelectorAll('.article-content pre').forEach(e => {
            hljs.highlightBlock(e)
        })
    }
}
</script>

<style>
    .article-content{
        background-color: white;
        border-radius: 8px;
        padding: 25px;
    }

    .article-content pre{
        padding: 20px;
        border-radius: 8px;
        font-size: 1.2rem;
        background-color: #1e1e1e;
        color:white
    }

    .article-content img{
        max-width: 100%;
    }

    .article-content :last-child{
        margin-bottom: 0px;
    }
</style>