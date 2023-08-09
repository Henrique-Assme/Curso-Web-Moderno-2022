const gulp = require('gulp')

const { appHtml, appCss, appJs, appImg } = require('./gulpTasks/app')
const { depsCss, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

module.exports.default = gulp.series(
    gulp.parallel(
        gulp.series(appHtml, appCss, appJs, appImg),
        gulp.series(depsCss, depsFonts)
    ),
    servidor,
    monitorarArquivos
)