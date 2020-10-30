<template>
  <!--
        Página principal onde ficam sendo mostrados os valores de categorias, artigos e 
        usuários cadastrados no sistema
    -->
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de conhecimento" />
        <!--
            Abaixo utilizamos três vezes o elemento Stat que foi importado neste documento
            para utiliza-lo passamos como parametro o título, o valor a ser exibido, ícone e a cor do ícone
        -->
    <div class="stats">
      <Stat
        title="Categorias"
        :value="stat.categories"
        icon="fa fa-folder"
        color="#d54d50"
      />
      <Stat
        title="Artigos"
        :value="stat.articles"
        icon="fa fa-file"
        color="#3bc480"
      />
      <Stat
        title="Usuários"
        :value="stat.users"
        icon="fa fa-user"
        color="#3282cd"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import Stat from "./Stat";//Import que permite a utilização do atributo Stat
import axios from "axios";
import { baseApiURL } from "@/global";

export default {
  name: "Home",
  components: { PageTitle, Stat }, //Lembrando que sempre precisamos registrar os componentes
  data: function () {
    return {
      stat: {},
    };
  },
  methods: {
      /**
       * Método getStats realiza uma requisição em cima da url de statísticas do nosso backend
       * desta forma recebemos como retorno res.data que é armazenado em this.stat, this.stat posteriormente
       * é colocado para ser exibido no frontEnd como stat.users, stat.articles e stat.categories
       */
    getStats() {
      axios.get(`${baseApiURL}/stats`).then((res) => (this.stat = res.data));
    },
  },
  //mounted executa o método em seu interior logo quando o documento é carregado, desta forma dispomos dos dados de primeira
  mounted() {
    this.getStats();
  },
};
</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>