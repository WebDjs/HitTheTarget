const gulp = require('gulp');

const sass = require('gulp-sass');
gulp.task('sass:compile', function () {
    return gulp.src(['./public/sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

const concatCss = require('gulp-concat-css');
gulp.task('css:concat', function () {
    return gulp.src('./public/css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('./public/css/bundle-css'));
});

const uglifyCss = require('gulp-uglifycss');
gulp.task('css:compress', function () {
    gulp.src('./public/css/bundle-css/bundle.css')
        .pipe(uglifyCss({
            'maxLineLen': 80,
            'uglyComments': true
        }))
        .pipe(gulp.dest('./public'))
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/**/*.scss', ['sass:compile', 'css:concat', 'css:compress']);
});