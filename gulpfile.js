const path = require('path');
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
const marked = require('gulp-marked');
const inject = require('gulp-inject-self');
const replace = require('gulp-replace');
const del = require('del');
const runSequence = require('run-sequence');
const reload = require('require-reload')(require)
let content = reload('./src/content/content.json');

// Helper function to find a key and its value in any object
function searchKey(obj, key = 'key') {
	var json = JSON.stringify(obj);
	var reg = new RegExp(`(?!^)(?:"${key}":)([^\\\\]+?})`);
	var group = reg.exec(json)[1];
	return JSON.parse(group);
}

// Clean HTML
gulp.task('html', function (cb) {
	pump([
		gulp.src('src/*.ejs'),
		ejs({
			site_title: 'Garlic Helper',
			content: content['content'],
			navbar: content['navbar']
		}, {}, {
			ext: '.html'
		}),
		htmlclean(),
		gulp.dest('dist/')
	], cb);
});

// Markdown Content Files
gulp.task('md', ['html'], function (cb) {
	pump([
		gulp.src('src/content/**/*.md'),
		marked(),
		ejs({
			site_title: 'Garlic Helper',
			page_title: 'PAGE_TITLE',
			content: content['content'],
			navbar: content['navbar']
		}, {}, {
			ext: '.html'
		}),
		inject('dist/template.html', /<INJECT>/, {
			replaceWith: function (fileContent) {
				return '\n' + fileContent;
			}
		}),
		replace('PAGE_TITLE', function () {
			var name = this.file.relative.replace(/(.*)\.(.*?)$/, "$1");
			var data = searchKey(content['content'], name);
			return data.title;
		}),
		htmlclean(),
		gulp.dest('dist/')
	], cb);
});

// Remove useless html files
gulp.task('clean-html', function (cb) {
	return del([
		'dist/template.html',
		'dist/blank.html'
	])
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

// Copies any file in files
gulp.task('files', function (cb) {
	pump([
		gulp.src(['src/files/**/*']),
		gulp.dest('dist/files')
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
		concat('style.css'),
		gulp.dest('dist/css'),
		postcss([
			cssnano
		]),
		rename('style.min.css'),
		gulp.dest('dist/css')
	], cb);
});

gulp.task('fonts', function (cb) {
	pump([
		gulp.src('src/fonts/**/*'),
		gulp.dest('dist/fonts')
	], cb);
});


// Remove previous build
gulp.task('clean', function (cb) {
	return del([
		'dist/**/*'
	]);
});

// Reload config file
gulp.task('reload', function (cb) {
	content = reload('./src/content/content.json');
	runSequence(['html', 'md'], cb);
});

gulp.task('deploy', function (cb) {
	runSequence('clean', 'build', 'clean-html', function () {
		ghpages.publish('dist', cb);
	});
});

gulp.task('prod', function (cb) {
	runSequence('clean', 'build', 'clean-html');
});

gulp.task('build', function(cb) {
	runSequence(['js', 'less', 'html', 'md', 'lib', 'fonts', 'files'], 'clean-html', cb);
});

gulp.task('watch', ['build'], function () {
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/less/**/*.less', ['less']);
	gulp.watch('src/**/*.ejs', ['html']);
	gulp.watch('src/content/**/*.md', ['md']);
	gulp.watch('src/content/content.json', ['reload'])
	gulp.watch('src/lib/**/*', ['lib']);
	gulp.watch('src/fonts/**/*', ['fonts']);
	gulp.watch('src/files/**/*', ['files']);

});