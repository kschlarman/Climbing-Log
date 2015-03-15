var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var del = require('del');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');

var path = {
  VIEWS: ['views/index.ejs', 'views/error.ejs'],
  MINIFIED_OUT: 'app.min.js',
  OUT: 'app.js',
  DEST_PUBLIC: 'build/public',
  DEST_VIEWS: 'build/views',
  ENTRY_POINT: './public/javascripts/app.js'
};

gulp.task('copy', function(){
  gulp.src(path.VIEWS)
    .pipe(gulp.dest(path.DEST_VIEWS));
});

gulp.task('watch', function() {
  gulp.watch(path.VIEWS, ['copy']);

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_PUBLIC))
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_PUBLIC));
});

gulp.task('build', function(){
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
  })
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(streamify(uglify(path.MINIFIED_OUT)))
    .pipe(gulp.dest(path.DEST_PUBLIC));
});

gulp.task('replaceHTML', function(){
  gulp.src(path.VIEWS)
    .pipe(htmlreplace({
      'js': 'public/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST_VIEWS));
});

gulp.task('production', ['clean', 'replaceHTML', 'build']);

gulp.task('default', ['watch']);

gulp.task('clean', function() {
  del('build');
});
