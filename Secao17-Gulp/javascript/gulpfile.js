const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, //não pega comentários
            presets: ["env"] //preset mais moderno que existe
        }))
        .pipe(uglify())
        .on('error', err => console.log(err)) //captura algum erro
        .pipe(concat('codigo.main.js'))
        .pipe(gulp.dest('build'))
    return cb()
}

exports.default = series(padrao)