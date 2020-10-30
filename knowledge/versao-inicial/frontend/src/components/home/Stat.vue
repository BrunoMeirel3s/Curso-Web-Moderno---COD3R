<template>
    <!--
        Este documento é utilizado para renderizar o card com informaçao das
        estatísticas
    -->
    <div class="stat">
        <div class="stat-icon">
            <i :class="icon" :style="style"></i>
        </div>
        <div class="stat-info">
            <!--
                Os valores entre chaves são do nosso javascript, que são
                valores passados como parametro durante a chamada deste documento
            -->
            <span class="stat-title">{{ title }}</span>
            <span class="stat-value">{{ value }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'Stat',
    props: ['title', 'value', 'icon', 'color'], //atibutos que devem ser informados quando chamarmos este documento em outra página
    /**
     * Em computed realizamos o processamento das variáveis que assim precisarem
     * para depois seus valores serem utilizados no frontEnd, como no exemplo abaixo que estamos 
     * ajustando o atibuto css cor para o valor passado como atributo para Stat.vue
     */
    computed: {
        style(){
            return "color: " + (this.color || "#000")
        }
    }
}
</script>
<style >
    .stat{
        flex:1;
        display: flex;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom: 20px;
        background-color: #fff;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

    }

    .stat-icon{
        display: flex;
        align-items: center;
    }

    .stat-icon i{
        font-size: 5rem;
    }

    .stat-info{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .stat-title{
        font-size: 1.2rem;
    }

    .stat-value{
        font-size: 3rem;
    }
</style>