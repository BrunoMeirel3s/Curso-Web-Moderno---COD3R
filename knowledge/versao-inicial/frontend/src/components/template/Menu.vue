<template>
    <!--
        Página que será exibida como menu lateral esquerdo da aplicação, para isso usamos a tag
        aside como abaixo, em v-show o menu apenas será exibido caso isMenuVisible criado em store.js
        esteja true, desta forma caso o usuário não esteja logado ou caso o botão de recolher o menu tenha
        sido pressionado o menu não será exibido
    -->
    <aside class="menu" v-show="isMenuVisible">
        <div class="menu-filter">
            <!--
                Abaixo temo um ícone e um input que serão utilizado para alterar o valor da variável
                treeFilter que irá filtrar os itens que serão exibidos no menu lateral
            -->
            <i id="icone" class="fa fa-search fa-lg"></i>
            <input type="text" placeholder="Digite para filtrar..."
                v-model="treeFilter" class="filter-field">
        </div>
        <!--
            O componente Tree abaixo é responsável por exibir os dados em forma de arvore
            passamos data=treeData para pegarmos os valores, options=treeOptions para
            pegarmos as configurações que serão utilizadas e o campo filter=treeFilter
            para realizarmos o filtro de acordo com o valor contido em treeFilter
        -->
        <Tree :data="treeData" :options="treeOptions"
            :filter="treeFilter" ref="tree"/>
    </aside>
</template>

<script>
/**
 * o import de mapState permite utilizarmos a variável isMenuVisible aqui em Menu.vue pois
 * a mesma foi primeiramente criada e processada em store.js
 */
import {mapState} from 'vuex'
import axios from 'axios'
import Tree from 'liquor-tree'//componente responsável por apresentar os dados em formato de arvore
const baseApiUrl = 'http://localhost:3000'

export default{
    name: "Menu",
    components:{ Tree },
    //mapState permite que utilizemos variáveis declaradas em outros arquivos
    computed: mapState(['isMenuVisible']),
    data: function(){
        return{
            treeFilter:'',
            //treeData recebe as categorias e seus paths para serem exibidos no frontEnd
            treeData: this.getTreeData(),
            //treeOptions configura a forma como o componente irá se comportar
            treeOptions:{
                propertyNames:{'text':'name'},
                filter:{
                    emptyText:'Categoria não encontrada'
                }
            }
        }
    },
    methods:{
        /**
         * getTreeData é responsável por obter do backend os dados do backend na url categories/tree
         * que já manda os artigos e categorias contendo seu path, após realizar a requisição na url
         * o valor é retornado, desta forma podemos armazenar este valor em uma variável
         */
        getTreeData(){
            const url = `${baseApiUrl}/categories/tree`
            return axios.get(url).then(res => res.data)
        },
        /**
         * onNodeSelect é utilizado para quando clicarmos em um artigo dentro do menu sermos direcionados
         * para sua página de leitura, realizamos um push utilizando o router direto em cima do name da rota que
         * cadastramos anteriormente em router.js, passando como parametro o id do node que no caso é o artigo
         */
        onNodeSelect(node){
            this.$router.push({
                name: 'articlesByCategory',
                params: {id: node.id}
            })

            //exibindo ou não o menu de acordo com o tamanho do menu
            if(this.$mq === 'xs' || this.$mq === 'sm'){
                this.$store.commit('toggleMenu', false)
            }
        }
    },
    mounted(){
        //tornando on nodeSelected disponível assimq que a página é carregada
        this.$refs.tree.$on('node:selected', this.onNodeSelect)
    }
}
</script>

<style>
    .menu{
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .menu a,
    .menu a:hover{
        color: white;
        text-decoration: none;
    }

    .menu .tree-node.selected > .tree-content,
    .menu .tree-node .tree-content:hover{
        background-color: rgba(255, 255, 255, 0.2);
    }

    .tree-arrow.has-child{
        filter: brightness(2);
    }

    .menu.menu-filter{
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 20px;
        padding-bottom: 8px;
        border-bottom: 1px solid #AAA;
    }

    .menu .menu-filter i{
        color: #AAA;
        margin-right: 15px;
    }

    #icone{
        margin-left: 15px;
    }

    .menu input{
        color: #CCC;
        font-size: 1.3rem;
        border: 0px;
        outline: 0;
        background: transparent;
    }

    .tree-filter-empty{
        color: #CCC;
        margin-left: 20px;
        font-size: 1.3rem;
    }
</style>
