const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')


function appHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))//htmlmin realizar a minificação de arquivos html, collapseWiteSpace pergunta se deixaremos os espaços vazios ou não
        .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))//sass() transforma o scss em css, .on('erro) é usado para caso aconteça algum erro nessa etapa
        .pipe(uglifycss({ "uglyComments": true }))
        /**
         * Apesar do index ser apenas um arquivos css usamos o concat
         * pois ele busca referências css de vários outros arquivos,
         * sendo assim iremos tranformar tudo em um só arquivo
         */
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV'] }))//presets do babel indica qual será a versão do JavaScript que ele irá considerar, ENV será a versão mais recente
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

/**
 * Precisamos 'nomear' as tasks conforme estamos fazendo nesta etapa
 * pois caso contrário não conseguiremos realizar o require delas
 * no arquivo gulpfile.js
 */
gulp.task('appHTML', appHTML)
gulp.task('appIMG', appIMG)
gulp.task('appJS', appJS)
gulp.task('appCSS', appCSS)

//exporta as tasks, permitindo que sejam requeridas em gulpfile.js
module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}