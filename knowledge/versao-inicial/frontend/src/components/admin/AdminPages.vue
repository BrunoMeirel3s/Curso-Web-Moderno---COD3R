<!--
    Aqui em template definimos todo o html que irá aparecer no frontEnd quando chamarmos pela tag
    AdminPages
-->
<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração do Sistema"
            sub="Cadastros & Cia"/>

        <!--
            Abaixo é criado uma estrutura do tipo cards onde cada tab é uma página com conteúdo
            HTML diferente
        -->

        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Artigos" active>
                        <ArticleAdmin/>
                    </b-tab>
                    <b-tab title="Categorias">
                        <CategoryAdmin/>
                    </b-tab>
                    <b-tab title="Usuários">
                        <UserAdmin/>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>

//import é utilizado para chamar conteúdos que estão em outro local para serem inseridos nesta página
import PageTitle from '../template/PageTitle'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

//name é o qual iremos utilizar na tag personalizada desta tag
//em 'components' precisamos colocar todos os componentes importados acima
export default {
    name: 'AdminPages',
    components: {PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin}
}
</script>

<style>

</style>