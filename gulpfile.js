const gulp = require('gulp');
const pump = require('pump');
const htmlclean = require('gulp-htmlclean');
const ejs = require('gulp-ejs');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');
const ghpages = require('gh-pages');


// Clean HTML
gulp.task('html', function (cb) {
	pump([
		gulp.src('src/*.ejs'),
		ejs({
			site_title: 'Garlic Helper'
		}, {}, {
			ext: '.html'
		}),
		htmlclean(),
		gulp.dest('dist/')
	], cb);
});

// Run task js, only if verify is successful
gulp.task('js', ['verify'], function (cb) {
	pump([
		gulp.src(['src/js/**/*.js', '!src/lib/**/*']),
		concat('script.js'),
		gulp.dest('dist/js'),
		minify({
			ext: {
				min: '.min.js'
			},
			noSource: true
		}),
		gulp.dest('dist/js')
	], cb);
});

// Lints the js files
gulp.task('verify', function (cb) {
	pump([
		gulp.src(['src/js/**/*.js', '!src/lib/**/*']),
		eslint(),
		eslint.format(),
		eslint.failAfterError()
	], cb);
});

// Copies any file in lib
gulp.task('lib', function (cb) {
	pump([
		gulp.src(['src/lib/**/*']),
		gulp.dest('dist/lib')
	], cb);
});

// Do a bunch of stuff to CSS files
gulp.task('less', function (cb) {
	pump([
		gulp.src('src/less/**/*.less'),
		less(),
		postcss([
			autoprefixer({
				browsers: ['last 2 versions', '> 2%']
			}),
			mqpacker
		]),
		rename('style.css'),
		gulp.dest('dist/css'),
		postcss([
			cssnano
		]),
		rename('style.min.css'),
		gulp.dest('dist/css')
	], cb);
});

gulp.task('deploy', ['build'], function (cb) {
	ghpages.publish('dist', cb);
});

gulp.task('build', ['js', 'less', 'html', 'lib']);

gulp.task('watch', ['build'], function () {
	gulp.watch('src/js/**/*.js', ['js'])
	gulp.watch('src/less/**/*.less', ['less'])
	gulp.watch('src/**/*.ejs', ['html'])
	gulp.watch('src/lib/**/*', ['lib'])

});