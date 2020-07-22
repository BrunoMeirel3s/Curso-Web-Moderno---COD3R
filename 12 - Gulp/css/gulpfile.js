const { series, parallel } = require('gulp')
const gulp = require('gulp')
//gulp-sass é utilizado especificamente para trabalhar com sass
const sass = require('gulp-sass')
//uglifycss é utilizado para minificar especificamente css
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function tranformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(tranformacaoCSS, copiarHTML)