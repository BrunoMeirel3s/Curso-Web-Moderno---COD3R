//biblioteca do note para trabalhar com tarefas agendadas
const schedule = require('node-schedule')

//schedule job recebe como parametro o tempo de repetição
//a hora que será executada, o minuto e o segundo
//também recebe o ano, mês e dia representados de 0 à 6
const tarefa1 = schedule.scheduleJob('*/5 *5 * * 2', function(){
    console.log('Executando Tarefa 1', new Date().getSeconds())
})

//setTimeout executa uma função depois de determinado tempo
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000)//tempo em milisegundos

//podemos criar uma regra de tempo para ser utilizada no scheduleJob
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 5
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2', new Date.getSeconds())
})