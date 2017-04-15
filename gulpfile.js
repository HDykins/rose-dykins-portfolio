var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var reactify = require('reactify');
var htmlMinifier = require('gulp-html-minifier');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var sassInput = './source/**/*.scss';
var cssOutput = './build/';

var imagesInput = './source/images/*.{png,jpg}';
var imagesOutput = './build/images';

var galleryInput = './source/images/gallery/*.{png,jpg}';
var galleryOutput = './build/images/gallery';

gulp.task('browserify', function () {
  return browserify('./source/js/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        // .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('combine-scripts', ['browserify'], function () {
  return gulp.src([
    './build/js/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./build/js/'));
});

gulp.task('compile-sass', function () {
  return gulp
    .src(sassInput)
    .pipe(sass())
    .pipe(gulp.dest(cssOutput));
});

gulp.task('transfer-images', function () {
  return gulp
    .src(imagesInput)
    .pipe(gulp.dest(imagesOutput));
});

gulp.task('transfer-images-gallery', function () {
  return gulp
    .src(galleryInput)
    .pipe(gulp.dest(galleryOutput));
});

gulp.task('minifyHtml', function() {
  return gulp.src('./source/*.html')
        .pipe(htmlMinifier({collapseWhitespace: true}))
        .pipe(gulp.dest('.'))
});

gulp.task('watch', function() {
  gulp.watch('./source/js/**/*.jsx', ['browserify']);
  gulp.watch('./source/**/*.html', ['minifyHtml']);
});

gulp.task('watch-sass', function () {
  var tasks = ['compile-sass'];

  return gulp
    .watch(sassInput, tasks)
    .on('change', function handleChange(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running ' + tasks + ' tasks');
    });
});

gulp.task('sass', ['compile-sass']);
gulp.task('build', ['browserify', 'minifyHtml', 'compile-sass', 'combine-scripts']);
gulp.task('update', ['browserify', 'minifyHtml', 'compile-sass', 'transfer-images', 'transfer-images-gallery']);
gulp.task('default', ['watch', 'browserify', 'minifyHtml', 'compile-sass', 'watch-sass']);
