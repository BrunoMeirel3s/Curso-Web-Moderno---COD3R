//ipcMain é o método que trabalha com requisições de arquivos, trabalhando de forma assíncrona
const {ipcMain} = require('electron')

/*
    ipcMain.on ficará ouvindo o evento process-subtitles que virá
    do frontEnd além de informar o evento precisamos  de um segundo
    parâmetro que no exemplo é (event, paths) =>{} uma arrow function
    que será retornada para o frontEnd
*/
ipcMain.on('process-subtitles', (event, paths)=>{
    console.log(paths)

    //event.reply irá responder ao evento 'event' no canal 'process-subtitles'
    event.reply('process-subtitles',[
        {name:'i', amount: 1234},
        {name:'you', amount: 1234},
        {name:'he', amount: 1234},
        {name:'she', amount: 1234},
        {name:'it', amount: 1234},
        {name:'we', amount: 1234},
        {name:'us', amount: 1234},
    ])
})