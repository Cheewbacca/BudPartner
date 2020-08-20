module.exports = function(){
    $.gulp.task('sass', function(){
        return $.gulp.src('src/sass/*.sass')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sass({
            'include css': true
        }))
        .pipe($.gp.autoprefixer({
            overrideBrowserslist: ['last 2 version']   
        }))
        .on("error", $.gp.notify.onError({
            title: "sass"
          }))
        .pipe($.gp.csso())
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest('build/static/css/'))
        .pipe($.bs.reload({
            stream: true
        }))
    });
}