<template>
  <!--
    Tela de Login onde o usuário realiza a inserção do seu usuário ou a criação de um novo login para acesso ao
    sistema
-->
  <div class="auth-content">
    <div class="auth-modal">
      <img src="@/assets/logo.png" width="200" alt="Logo" />
      <hr />
      <!--
          O título da página muda de acordo com a variável showSignup que é ativada
          ou desativada ao clicar no botão para criação de usuário
      -->
      <div class="auth-title">{{ showSignup ? "Cadastro" : "Login" }}</div>

      <!--
          v-if faz com que o elemento html apenas seja renderizado apenas caso
          a variável informada entre aspas seja verdadeira.
      -->
      <input
        v-if="showSignup"
        v-model="user.name"
        type="text"
        placeholder="Nome"
      />
      <input
        v-model="user.email"
        name="email"
        type="text"
        placeholder="E-mail"
      />
      <input
        v-model="user.password"
        name="password"
        type="password"
        placeholder="Senha"
      />
      <input
        v-if="showSignup"
        v-model="user.confirmPassword"
        type="password"
        placeholder="Confirme a Senha"
      />
      <!--
          v-if faz com que o elemento html apenas seja renderizado apenas caso
          a variável informada entre aspas seja verdadeira.
      -->
      <button v-if="showSignup" @click="signup">Registrar</button>
      <button v-else @click="signin">Entrar</button>

      <!--
          usamos o @click.prevent para remover a navegação entre links padrão
          da tag 'a' e para alterar o valor de showSignup desta forma exibindo ou não
          a opção de criação de usuário
       -->
      <a href @click.prevent="showSignup = !showSignup">
        <span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
        <span v-else>Não tem cadastro? Registre-se aqui!</span>
      </a>
    </div>
  </div>
</template>

<script>
const baseApiUrl = "http://localhost:3000";
import { showError, userKey } from "@/global";
import axios from "axios";

export default {
  name: "Auth",
  data: function () {
    return {
      showSignup: false,
      user: {},
    };
  },
  methods: {
    /**
        Método signin é utilizado para realização da autenticação do usuário, desta forma
        é realizado uma requisição do tipo post no link de signin passando como parametro o
        objeto this.user que contem email e senha de acesso
     */  
    signin() {
      axios
        .post(`${baseApiUrl}/signin`, this.user)
        .then((res) => {
          //abaixo é enviado o res.data para o documento store.js em config para chegar
          //no método setUser se o usuário foi validado, desta forma podemos habilitar a exibição do menu para ele
          this.$store.commit("setUser", res.data);

          /**
           * Após conseguir validar o usuário e senha do usuário é criado um hash de acesso para o mesmo,
           * este hash na linha abaixo será armazenado no atributo localStorage do navegador do computador
           * desta forma o usuário pode fechar o navegador e quando entrar a sua sessão permanecerá aberta
           */
          localStorage.setItem(userKey, JSON.stringify(res.data));

          //após tudo isso direcionamos o usuário para a tela home do nosso projeto
          this.$router.push({ path: "/" });
        })
        .catch(showError);
    },
    /**
     * signup é utilizado para criação de novos usuário via frontend da aplicação,
     * realizando um post em cima de signup e passando this.user como parametro,
     * após realizar o post limpamos os dados de user e marcamos showSignup como false
     */
    signup() {
      axios
        .post(`${baseApiUrl}/signup`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.user = {};
          this.showSignup = false;
        })
        .catch(showError);
    },
  },
};
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  background-color: #fff;
  width: 350px;
  padding: 35px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
}

.auth-modal input {
  border: 1px solid #bbb;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
}

.auth-modal button {
  align-self: flex-end;
  background-color: #2460ae;
  color: #fff;
  padding: 5px 15px;
}

.auth-modal a {
  margin-top: 35px;
}

.auth-modal hr {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    rgba(120, 120, 120, 0.75),
    rgba(120, 120, 120, 0)
  );
}
</style>
