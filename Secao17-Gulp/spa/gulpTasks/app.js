const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')(require('sass'))

function appHtml(cb){
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
}
function appCss(cb){
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments" : true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}
function appJs(cb){
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({
            comments: false, //não pega comentários
            presets: ["env"] //preset mais moderno que existe
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}
function appImg(cb){
    return gulp.src('src/assets/imgs/*')
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHtml', appHtml)
gulp.task('appCss', appCss)
gulp.task('appJs', appJs)
gulp.task('appImg', appImg)

module.exports = {appHtml, appCss, appJs, appImg}