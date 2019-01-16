const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass',() => {
    return gulp.src('scss/main.scss')
           .pipe(sass())
           .pipe(gulp.dest('./css'))
});

gulp.task('watch',() => {
    gulp.watch('scss/main.scss', gulp.series('sass'));
});