/**
 * Documento de rotas da nossa aplicação, o mesmo é reponsável por gerenciar
 * a navegação entre páginas
 */
import Vue from 'vue'
import VueRouter from 'vue-router' //vue-router, responsável por ajustar as rotas quando utilizamos vue

//os componentes para qual formos navegar precisam estar importados aqui
import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticlesById from '@/components/article/ArticlesById'
import Auth from "@/components/auth/Auth"

//userKey é o hash salvo na maquina após o usuário se logar na aplicação
import{userKey} from '@/global'

Vue.use(VueRouter)//pedimos para o vue utilizar o vueRouter

/**
 * Dentro da const routes definimos todas as rotas que iremos utilizar em nossa aplicação
 * frontEnd, salvamos um nome, o path que é a url, o componente para ser chamado naquela url, este mesmo componente
 * será inserido no router-view no documento content.vue, algumas rotas utilizam também o atributo meta
 * onde podemos definir alguns comandos padrões, aqui estamos usando o requiresAdmin: true que exige que 
 * o usuário esteja logado como administrador para ter acesso ao link
 */
const routes = [{
    name:'home',
    path:'/',
    component: Home
}, {
    name:'adminPages',
    path: '/admin',
    component: AdminPages,
    meta:{ requiresAdmin: true}
},{
    name: 'articlesByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
},{
    name: 'articleById',
    path: '/articles/:id',
    component: ArticlesById
},{
    name: 'auth',
    path: '/auth',
    component: Auth
}]

//habilita o histórico de navegação, permitindo voltar e retornar
const router = new VueRouter({
    mode: 'history',
    routes
})

/**
 * Abaixo estamos verificando as rotas para identificar quais precisam que o usuário
 * esteja logado como administrador, se for identificado que a rota precisa disto
 * é realizado a conversão do userkey para um objeto e comparado se o usuário está definido
 * e se o atributo user.admin também está definido e é true, se sim é permitido a passagem
 * pela url, senão o usuário é direcionado para o path '/' o home da aplicação
 */
router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)){
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/'})
    } else{
        next()
    }
})

export default router


