<template>
 <v-container fluid>
     <v-form>
         <!--
             v-file-: é um component do vue para inserção de arquivos
             multiple: permite selecionar vários arquivos
             chips: muda a forma de visualizar os arquivos selecionados
             v-model= 'files': insere as legendas selecionadas na variável files
             @click:append-outer="processSubtitles" chama a função para processamento das legendas
         -->
         <v-file-input
         label="Selecione as Legendas"
         prepend-icon="mdi-message-text"
         append-outer-icon="mdi-send"
         outlined
         multiple 
         chips 
         v-model="files"
         @click:append-outer="processSubtitles"
         />

     </v-form>
     <div class="pills">
         <!--
             Pill realiza um for em cima de groupedWords colocando
             a palavra e a quantidade de vezes que ela aparece
         -->
         <Pill v-for="word in groupedWords" :key="word.name"
            :name="word.name" :amount="word.amount"/>

     </div>
 </v-container>
</template>

<script>
//ipcRenderer é utilizado no frontEnd para escutar e enviar processos para o backend que utiliza o ipcMain
import { ipcRenderer } from 'electron'
import Pill from './Pill'

export default {
    components:{
        Pill
    },
    data: function(){
        return{
            files:[],
            groupedWords:[]
        }
    },
    methods: {
        processSubtitles(){
            const paths = this.files.map(f => f.path)
            ipcRenderer.send('process-subtitles', paths)//envia para o backend no canal processSubtitles os caminhos dos arquivos
            //ipcRenderer.on ouve do backend no canal process-subtitles recebendo resp que está sendo colocado no vetor groupedWords
            ipcRenderer.on('process-subtitles', (event, resp)=>{
                this.groupedWords = resp
            })
        }
    }
}
</script>

<style>
    .pills{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>