const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('dist'))
		.pipe(rename('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], function() {
  gulp.watch('src/js/**/*.js', ['scripts'])
});