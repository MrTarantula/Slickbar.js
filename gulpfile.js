var gulp = require('gulp'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    del = require('del'),
    ngTemplates = require('gulp-angular-templatecache'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');

var path = {
    js: ["src/*.module.js", "src/*.directive.js", "src/*.config.js", "src/**/*.js"],
    less: "src/*.{less,css}",
    templateHTML: "src/*.html",
    template: "src/tpl/",
    lib: ["bower_components/**/dist/**/*.min.*", "bower_components/**/angular*/**/*.min{.js,.js.map}", 'bower_components/**/*.min.css'],
    build: "build/",
    src: "src/"
};

gulp.task('default', ['build']);

gulp.task('watch', function (cb) {
    watch('src/*.*', function () {
        gulp.start('build', cb);
    });
});

gulp.task('build', ['clean'], function () {
    gulp.start(['js', 'css']);
});

gulp.task('clean', function (cb) {
    del(path.build);
    del(path.template, cb);
});

//runs tpl to build templatecache, then concatenates and uglifies all
gulp.task('js', ['tpl'], function () {
    return gulp
        .src(path.js)
        .pipe(concat('angular-slickbar.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.build));
});

gulp.task('css', function () {
    return gulp
        .src(path.less)
        .pipe(less())
        .pipe(concat('angular-slickbar.min.css'))
        .pipe(minify())
        .pipe(gulp.dest(path.build));
});

gulp.task('tpl', function () {
    return gulp
        .src(path.templateHTML)
        .pipe(ngTemplates({
            module: 'ngSlickbar'
        }))
        .pipe(rename('angular-slickbar.tpl.js'))
        .pipe(gulp.dest(path.template));
});
