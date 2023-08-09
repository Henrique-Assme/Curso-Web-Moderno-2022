const gulp = require('gulp')
const series = gulp.series
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTs(){
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

module.exports.default = series(transformacaoTs)