const gulp = require('gulp')//instância de gulp

const {series, parallel} = require('gulp')//instâncias utilizadas para informar o tipo de processamento a ser realizado com a tasks
//const series = gulp.series

/**
 * As funções recebem o nome de tasks que serão executadas
 * utilizando o gulp, para isso podemos criar funções utilizando
 * o function declaration ou arrow functions, porém sempre precisamos
 * receber como parametro uma callback que será retornada
 * no final da função, assim informando que a função foi executada corretamente
 */
const antes1 = cb => {
    console.log('Tarefa antes 1')
    return cb()//retorno de callback
}
const antes2 = cb => {
    console.log('Tarefa antes 2')
    return cb()
}

function copiar(cb){

    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //selecionar quais arquivos iremos usar como entrada
    gulp.src(['pastaA/**/*.txt'])
        .pipe(gulp.dest('pastaB'))//gulp.dest especifica o local de destino para onde irão os arquivos

        //.pipe(imagempelaMetade())//aplicar transformações nos arquivos do src
        //.pipe(ImagemEmPretoEBranco())
        //.pipe(transformacaoA())
        //.pipe(transformacaoB())
        //.pipe(transformacaoC())

    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

/**
 * sempre será necessário exportar as tasks para realizar
 * a execução das mesmas,  sempre seguindo essa estrutura
 * tasks que precisarem ser executadas em paralelo precisam
 * ser chamadas pelo comando: 'parallel'
 */
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
    )