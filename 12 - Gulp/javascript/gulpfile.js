const {series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

/**
 * Neste exemplo iremos pegar os código JavaScript disponíveis em src e concatena-los
 * posteriormente colocando a versão concatenada e minificada em uma pasta chamada build
 */
function padrao(cb){
    gulp.src('src/**/*.js')
    /**
     * Babbel é utilizado para transformar código JavaScript de um padrão mais 
     * novo para um padrão mais antigo, tornando o código mais compatível,
     * para utiliza-lo com o pipe devemos informar alguns itens, como se serão
     * incorporados os comentários no arquivo final e qual preset iremos utilizar
     * com o JavaScript, 'env' é o preset mais novo, assim transformamos o código
     * JavaScript mais novo em um código melhor compatível com todos os browsers
     */
    .pipe(babel({
        comments:false,
        presets: ["env"]
    }))
    .pipe(uglify())//uglify minifica o código, removendo espaços e quebras de linha
    .on('error', err => console.log(err))//.on pode ser usado para tratamento de erros ou outros status
    .pipe(concat('codigo.min.js'))//utilizando o concat podemos concatenas todos os códigos chamados em gulp.src, codigo.min.js é o nome do novo arquivo
    .pipe(gulp.dest('build'))//pasta de destino

    return cb()
}

function fim(cb){
    console.log('Fim!!!')
    return cb()
}

/**
 * Lembrando que o parallel executa os códigos lado a lado
 * o menor código finalizará primeiro, enquanto o código mais
 * complexo demorará mais tempo para finalizar
 */
exports.default = parallel(padrao, fim)