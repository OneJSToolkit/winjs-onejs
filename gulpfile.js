'use strict';

var gulp = require('gulp');
var onejsCompiler = require('gulp-onejs-compiler');
var tsc = require('gulp-tsc');
var clean = require('gulp-clean');
var flatten = require('gulp-flatten');
var add = require('gulp-add-src');
var less = require('gulp-less');
var csstojs = require('gulp-csstojs');
var filter = require('gulp-filter');
var webserver = require('gulp-webserver');

var paths = {
    buildPath: 'build',
    appPath: 'app',
    staticFiles: [ 'node_modules/requirejs/require.js', 'src/index.html']
};

gulp.task('clean', function() {
    return gulp.src([paths.buildPath, paths.appPath])
        .pipe(clean());
});

gulp.task('tsc-preprocess', ['clean'], function() {
    var lessFilter = filter('**/*.less');

    return gulp.src(['node_modules/onejs-compiler/src/**/*', 'node_modules/onejs/src/**/*', 'src/**/*' ])
        .pipe(lessFilter)
        .pipe(less())
        .pipe(csstojs({
            typeScript: true
        }))
        .pipe(lessFilter.restore())
        .pipe(flatten())
        .pipe(onejsCompiler())
        .pipe(gulp.dest(paths.buildPath + '/ts'));
});

gulp.task('tsc', ['tsc-preprocess'], function() {
    return gulp.src(paths.buildPath + '/ts/**/*.ts')
        .pipe(tsc({
            module: 'amd'
        }))
        .pipe(gulp.dest(paths.appPath));
});

gulp.task('copy-static-files', ['clean', 'tsc'], function() {
    return gulp.src(paths.staticFiles)
        .pipe(gulp.dest(paths.appPath));
});

gulp.task('serve', function() {
    gulp.src(paths.appPath)
        .pipe(webserver({
            livereload: false,
            directoryListing: {
                enable: false,
                path: paths.appPath
            },
            open: true,
            fallback: 'index.html'
        }));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*', ['default']);
});

gulp.task('default', ['tsc', 'copy-static-files']);

