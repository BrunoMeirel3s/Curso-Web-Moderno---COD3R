<template>
  <div class="calculator">
      <Display/>
      <Button label="AC" triple @onclick="clearMemory"/>
      <Button label="/" operation @onclick="setOperation"/>
      <Button label="7" @onclick="addDigit"/>
      <Button label="8" @onclick="addDigit"/>
      <Button label="9" @onclick="addDigit"/>
      <Button label="*" operation @onclick="setOperation"/>
      <Button label="4" @onclick="addDigit"/>
      <Button label="5" @onclick="addDigit"/>
      <Button label="6" @onclick="addDigit"/>
      <Button label="-" operation @onclick="setOperation"/>
      <Button label="1" @onclick="addDigit"/>
      <Button label="2" @onclick="addDigit"/>
      <Button label="3" @onclick="addDigit"/>
      <Button label="+" operation @onclick="setOperation"/>
      <Button label="0" double @onclick="addDigit"/>
      <Button label="." @onclick="addDigit"/>
      <Button label="=" operation @onclick="setOperation"/>

  </div>
</template>

<script>

import Display from "../components/Display"
import Button from "../components/Button"

export default {
    //após importar os componentes é necessário registrálos como abaixo:
    components:{Button, Display },
    methods:{
        clearMemory(){
            
        },
        setOperation(operation){
            
        },
        addDigit(n){
            
        }
    }
}
</script>

<style>
.calculator{
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>