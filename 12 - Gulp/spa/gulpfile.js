const {series, parallel} = require ('gulp')
const gulp = require('gulp')

/**
 * as constantes abaixos são as tasks definidas
 * em app.js, deps.js e servidor.js, estamos requerendo
 * elas aqui para depois usarmos o module.exports para o gulp
 * realizar as tarefas programadas
 */
const{ appHTML, appCSS, appJS, appIMG} = require('./gulpTasks/app.js')
const{ depsCSS, depsFonts} = require('./gulpTasks/deps.js')
const{ monitorarArquivos, servidor} = require('./gulpTasks/servidor.js')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)