const gulp = require('gulp')
const parallel = gulp.parallel
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCss(){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments" : true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHtml(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}
exports.default = parallel(transformacaoCss, copiarHtml)