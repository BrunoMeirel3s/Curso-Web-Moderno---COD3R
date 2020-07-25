const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(){
    return gulp.src('build')//servidor retorna os arquivos da pasta build
    .pipe(webserver({
        port:8080,
        open: true,
        livereload: true //habilita o reload automático
    }))
}

function monitorarArquivos(cb){
    /**
     * Funções watch abaixo são responsáveis por observar se houve
     * mudança nos arquivos se sim irão chamar as taks de volta
     * para a realizar o gulp dos arquivos e assim atualizar a pasta
     * build
     */
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}


module.exports = {
    monitorarArquivos,
    servidor
}