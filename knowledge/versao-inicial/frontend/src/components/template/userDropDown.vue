<template>
    <!--
        userDropDown é utiliizado como menu superior direito, onde exibe o nome 
        do usuário bem como seu ícone, porém ao apertarmos no menu é exibido os links
        para acesso a parte de configuração e o botão de sair da aplicação
    -->
    <div class="user-dropdown">
        <!--Exibe o nome do usuário e seu ícone de acordo com o gravatar-->
        <div class="user-button">
            <span class="d-none d-sm-block">{{user.name}}</span>
            <div class="user-dropdown-img">
                <Gravatar :email="user.email" alt="User"/>
            </div>
            <i class="fa fa-angle-down"></i>
        </div>
        <!--
            essa div recebe a class user-dropdown-content pois é nela
            que ficará os conteúdo que serão exibidos para termos acesso a tela de adiministração
            e ao botão de sair, utilizamos o router link para nos direcionarmos utilizando ajax
        -->
        <div class="user-dropdown-content">
            <router-link to="/admin" v-if="user.adminmq.js">
                <i class="fa fa-cogs"></i>Administração
            </router-link>
            <a href="" @click.prevent="logout">
                <i class="fa fa-sign-out"></i>Sair
            </a>
        </div>
    </div>
</template>

<script>
import { userKey} from '@/global'
import{mapState} from 'vuex'
import Gravatar from 'vue-gravatar'

export default{
    name: 'UserDropDown',
    components: { Gravatar},
    computed: mapState(['user']),
    methods: {
        logout(){
            /**
             * Observe que o método de logout limpa o userkey no localStorage do navegador e após isso
             * seta o usuário como null em setUser, após isso realiza o direcionamento para a tela de login
             * da aplicação
             */
            localStorage.removeItem(userKey)
            this.$store.commit('setUser', null)
            this.$router.push({name:'auth'})
        }
    }
}
</script>

<style>
    .user-dropdown{
        position: relative;
        height: 100%;
    }
    .user-button{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 100;
        height: 100%;
        padding: 0px 20px;
    }

    .user-dropdown:hover{
        background-color: rgba(0, 0, 0, 0.2);
    }

    .user-dropdown-img{
        margin: 0px 10px;
    }

    .user-dropdown-img > img{
        max-height: 37px;
        border-radius: 5px;
    }

    .user-dropdown-content{
        position: absolute;
        right: 0px;
        background-color: #f9f9f9;
        min-width: 170px;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
    }

    .user-dropdown:hover .user-dropdown-content{
        visibility: visible;
        opacity: 1;
    }
    .user-dropdown-content a{
        text-decoration: none;
        color: black;
        padding: 10px;
    }

    .user-dropdown-content a:hover{
        background-color: #EDEDED;
        text-decoration: none;
        color: black;
    }
</style>