<template>
    <!--
        as tags que ficam entre a tag template são as que irão aparecer no frontEnd da aplicação,
        Footer é utilizado como rodapé da página, desta forma abaixo é utilizado a tag footer
    -->
    <footer class="footer">
        <span>Copyright<strong>Cod3r</strong> - 2020</span>
    </footer>
</template>

<script>

export default{
    name: "Footer"
}
</script>

<style>
    .footer{
        grid-area: footer;
        background-color: #DDD;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>
