var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var del = require('del');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var order = require("gulp-order");

var path = {
  VIEWS: ['views/index.ejs', 'views/error.ejs'],
  STYLESHEETS: ['public/stylesheets/base.scss',
                'public/stylesheets/layout.scss',
                'public/stylesheets/main-header.scss',
                'public/stylesheets/climb-card.scss',
                'public/stylesheets/timeline.scss'],
  JS_MINIFIED_OUT: 'app.min.js',
  CSS_MINIFIED_OUT: 'app.min.css',
  JS_OUT: 'app.js',
  CSS_OUT: 'app.css',
  DEST_PUBLIC: 'build/public',
  DEST_VIEWS: 'build/views',
  ENTRY_POINT: './public/javascripts/app.jsx'
};

gulp.task('copy_views', function(){
  gulp.src(path.VIEWS)
    .pipe(gulp.dest(path.DEST_VIEWS));
});

gulp.task('copy_sass', function () {
    gulp.src(path.STYLESHEETS)
      .pipe(order(path.STYLESHEETS))
      .pipe(sass())
      .pipe(concat(path.CSS_OUT))
      .pipe(gulp.dest(path.DEST_PUBLIC));
});

gulp.task('watch', ['copy_views', 'copy_sass'], function() {
  gulp.watch(path.VIEWS, ['copy_views']);
  gulp.watch(path.STYLESHEETS, ['copy_sass']);

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source(path.JS_OUT))
      .pipe(gulp.dest(path.DEST_PUBLIC))
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.JS_OUT))
    .pipe(gulp.dest(path.DEST_PUBLIC));
});

gulp.task('build_js', function(){
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
  })
    .bundle()
    .pipe(source(path.JS_MINIFIED_OUT))
    .pipe(streamify(uglify(path.JS_MINIFIED_OUT)))
    .pipe(gulp.dest(path.DEST_PUBLIC));
});

gulp.task('build_sass', function () {
    gulp.src(path.STYLESHEETS)
        .pipe(sass())
        .pipe(concat(path.CSS_MINIFIED_OUT))
        .pipe(minifycss())
        .pipe(gulp.dest(path.DEST_PUBLIC));
});

gulp.task('replaceHTML', function(){
  gulp.src(path.VIEWS)
    .pipe(htmlreplace({
      'js': 'public/' + path.JS_MINIFIED_OUT,
      'css': 'public/' + path.CSS_MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST_VIEWS));
});

gulp.task('production', ['clean', 'replaceHTML', 'build_sass', 'build_js']);

gulp.task('default', ['watch']);

gulp.task('clean', function() {
  del('build');
});
