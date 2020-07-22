const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')

/**
 * tsProject recebe ts.createProject o arquivo
 * que vem dentro de parenteses informa as configurações
 * que devem ser usadas na hora de realizar a conversão
 * de TypeScript para JavaScript
 */
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(){
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}


exports.default = series(transformacaoTS)