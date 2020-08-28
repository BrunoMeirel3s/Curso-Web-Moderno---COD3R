<template>
    <!--
        :class é monitorada pelo vue, double triple e operation são boleanos, sendo assim
        caso não sejam passados na chamada do componente serão dados como false, assim podemos
        variar a classe css do botão.

        &emit permite executar eventos criados, no caso o evento onclick que recebe como parametro o 
        label do botão

    -->
  <button class="button"
    @click="$emit('onclick', label)"
    :class="{double, triple, operation}">
      {{label}}<!--label processado pelo vue, irá variar de acordo com o botão-->
  </button>
</template>

<script>
export default {
    //props são os atributos que os componentes recebem, label é o rótulo do botão passado durante a chamada do componente
    props:{
        label: {},

        /*observe que os atributos abaixo são do tipo boleano sendo assim podem ser true ou false
          dessa forma podemos passa-los ou não na chamada do componente, caso não seja passado o 
          atributo é dado como false, dessa forma não será incluído como classe css*/
        operation: { type: Boolean},
        double: {type: Boolean},
        triple: {type: Boolean}
    }
}
</script>

<style>
:root{
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;
}

.button{
    font-size: 1.4em;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    outline: none;
}

.button:active{
    background-color: #ccc;
}

.button.double{
    grid-column: span 2;
}

.button.triple{
    grid-column: span 3;
}

.button.operation{
    background-color: #fa8231;
    color: #fff;
}

.button.operation:active{
    background-color: #fa8231cc;
}
</style>