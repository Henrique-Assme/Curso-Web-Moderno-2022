const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(cb){
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
}

function monitorarArquivos(cb){
    watch('src/**/*.html', () => gulp.series('appHtml')())
    watch('src/**/*.css', () => gulp.series('appCss')())
    watch('src/**/*.js', () => gulp.series('appJs')())
    watch('src/assets/**/*.*', () => gulp.series('appImg')())
    
    return cb()
}

module.exports = {monitorarArquivos, servidor}