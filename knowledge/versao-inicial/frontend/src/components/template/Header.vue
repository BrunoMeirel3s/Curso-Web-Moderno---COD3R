<template>
    <!--
        Header é o elemento html que será exibido na parte superior da nossa página,
        abaixo podemos ver na tag 'a' onde inserimos um ícone de '<' para esconder
        o menu utilizando a função toggleMenu
    -->
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <!--
            no h1 abaixo exibimos o título da página utilizando o router-link
            pedimos para quando clicarmos no título sermos direcionados para home
        -->
        <h1 class="title">
            <router-link to="/">{{ title }}</router-link>
        </h1>
        <!-- Componente html que renderiza o menu de configurações e a opção de sair-->
        <UserDropDown v-if="!hideUserDropDown"/>
    </header>
</template>

<script>

//importa o componente UserDropDown para ser utilizado aqui no Header.vue
import UserDropDown from './userDropDown'

export default{
    name: 'Header',
    components:{UserDropDown},
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropDown: Boolean
    },
    computed:{
        //trocamos o tipo  do ícone cada vez que chamamos o icon(), é realizado uma verificação no em
        //store.js para ver se isMenuVisible é true ou false desta forma mudamos o estilo do ícone
        icon(){
            return this.$store.state.isMenuVisible ?"fa-angle-left" : "fa-angle-down"
        }
    },
    /**
     * toggleMenu é responsável por checar se o usuário está logado se sim ele permite que seja recolhido ou não 
     * o menu lateral, o processamento desta verificação é executada em store.js
     */
    methods:{
        toggleMenu(){
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header{
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title{
        font-size: 1.2rem;
        color: white;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a{
        color: white;
        text-decoration: none;
    }
    .title a:hover{
        color: white;
        text-decoration: none;
    }

    header.header > a.toggle{
        width: 60px;
        height: 100%;
        color: white;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover{
        color: white;
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
