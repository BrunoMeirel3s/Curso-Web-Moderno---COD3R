//ipcMain é o método que trabalha com requisições de arquivos, trabalhando de forma assíncrona
const {ipcMain} = require('electron')

const pathsToRows = require('./pathsToRrows')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')

/*
    ipcMain.on ficará ouvindo o evento process-subtitles que virá
    do frontEnd além de informar o evento precisamos  de um segundo
    parâmetro que no exemplo é (event, paths) =>{} uma arrow function
    que será retornada para o frontEnd
*/
ipcMain.on('process-subtitles', (event, paths)=>{
    pathsToRows(paths)
    .then(rows => prepareData(rows))
    .then(words => groupWords(words))
    .then(groupedWords => event.reply('process-subtitles', groupedWords))
    

    
})