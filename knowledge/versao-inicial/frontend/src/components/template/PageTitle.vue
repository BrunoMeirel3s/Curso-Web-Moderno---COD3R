<template>
    <!--
        Componente para ser utilizado na exibição do título da página, abaixo podemos ver que é
        carregador no h1 o ícone da página bem como seu título no h2 é carregado o subtítulo da página,
        ambos passados como parametro na chamada deste componente
    -->
    <div class="page-title">
        <h1><i v-if="icon" :class="icon"></i>{{ main }}</h1>
        <h2>{{ sub }}</h2>
        <hr>
    </div>
</template>
<script>
export default {
    name: 'PAgeTitle',
    props:['icon', 'main', 'sub']//atributos a serem informado na hora da chamada do componente PageTitle
}
</script>
<style>
    .page-title h1{
        margin: 0px;
    }
    .page-title h2{
        color: #777;
        margin-top: 5px;
        font-size:1.3rem;
    }
</style>