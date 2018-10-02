const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// const uglify = require('gulp-uglify');
const del = require('del');
const purgecss = require('gulp-purgecss');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'src',
    },
  });
});

gulp.task('sass', function() {
  return (
    gulp
      .src('src/styles/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      // .pipe(
      //   autoprefixer({
      //     browsers: ['last 4 versions'],
      //     cascade: false,
      //   }),
      // )
      .pipe(gulp.dest('src/styles/css'))
      .pipe(
        browserSync.reload({
          stream: true,
        }),
      )
  );
});

// Gulp will delete the `dist` folder for you whenever gulp clean:dist is run.
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch('src/styles/**/*.scss', ['sass']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/scripts/**/*.js', browserSync.reload);
});

gulp.task('Bcss', function() {
  var plugins = [
    purgecss({
      content: ['src/**/*.html'],
    }),
    autoprefixer({ browsers: ['last 4 versions'] }),
    cssnano(),
  ];
  return gulp
    .src('./src/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function(callback) {
  runSequence(['sass', 'browser-sync', 'watch'], callback);
});

gulp.task('build', function(callback) {
  runSequence('clean:dist', ['Bcss'], callback);
});
