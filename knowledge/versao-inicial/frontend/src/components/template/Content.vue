<template>
    <div class="content">
        <!--
            É neste documento que os demais são abertos quando navegamos entre os links,
            abaixo temos a tag router-view que realiza a renderização das páginas de acordo
            com a rota
        -->
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    name: 'Content'
}
</script>
<style>
    .content{
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
    }
</style>