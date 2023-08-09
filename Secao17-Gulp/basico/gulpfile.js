const gulp = require('gulp')
const series = gulp.series
const paralelo = gulp.parallel

function antes1(cb){
    console.log("Antes1")
    return cb()
}

function antes2(cb){
    console.log("Antes2")
    return cb()
}

function copiar(cb){
    // gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')//qualquer arquivo com .txt
        .pipe(gulp.dest('pastaB'))
    return cb()
}

function depois(cb){
    console.log("Depois")
    return cb()
}
module.exports.default = series(
    paralelo(antes1, antes2),
    copiar,
    depois
    )