const gulp = require('gulp');
// const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

gulp.task('sass', async function () {
	return gulp
		.src('app/css/sass/*.scss ')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

// Watch and Serve
gulp.task('serve', async function () {
	browserSync.init({
		server: './app',
	});
	watch('app/css/**/*.scss', gulp.series('sass'));
	// watch('app/js/*.js', gulp.series('scripts'));
	watch('app/js/*.js').on('change', browserSync.reload);
	watch('app/*.html').on('change', browserSync.reload);
});

// gulp.task('mvforms', async () => {
// 	gulp
// 		.src('app/css/forms.css')
// 		.pipe(rename('forms.scss'))
// 		.pipe(gulp.dest('app/css/sass/build-files'));
// });
// gulp.task('mvslideshow', async () => {
// 	gulp
// 		.src('app/css/slideshow.css')
// 		.pipe(rename('slideshow.scss'))
// 		.pipe(gulp.dest('app/css/sass/build-files'));
// });
// gulp.task('mvstyle', async () => {
// 	gulp
// 		.src('app/css/style.css')
// 		.pipe(rename('style.scss'))
// 		.pipe(gulp.dest('app/css/sass/build-files'));
// });
// gulp.task('mvstyle-temp', async () => {
// 	gulp
// 		.src('app/css/style-temp.css')
// 		.pipe(rename('style-temp.scss'))
// 		.pipe(gulp.dest('app/css/sass/build-files'));
// });
// gulp.task('mvmobile', async () => {
// 	gulp
// 		.src('app/css/mobile.css')
// 		.pipe(rename('mobile.scss'))
// 		.pipe(gulp.dest('app/css/sass/build-files'));
// });
// gulp.task('mvmobile-temp', async () => {
// 	gulp
// 		.src('app/css/mobile-temp.css')
// 		.pipe(rename('mobile-temp.scss'))
// 		.pipe(gulp.dest('app/css/sass/build-files'));
// });

// gulp.task(
// 	'mv4distcss',
// 	gulp.series([
// 		'mvforms',
// 		'mvslideshow',
// 		'mvstyle',
// 		'mvstyle-temp',
// 		'mvmobile',
// 		'mvmobile-temp',
// 	])
// );

// gulp.task('cssminify', async () => {
// 	gulp
// 		.src('app/css/sass/style.dist.scss ')
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(cssnano())
// 		.pipe(rename('style.min.css'))
// 		.pipe(gulp.dest('dist/css'));
// });

// gulp.task('cssminify', async () => {
// 	gulp.src('app/css/style.dist.min.css')
// 		.pipe(cssnano())
// 		.pipe(gulp.dest('dist/assets/css'))
// })

// function style() {
// 	return gulp
// 		.src('./scss/**/*.scss')
// 		.pipe(sourcemaps.init())
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest('app/css'));
// }

// exports.style = style;

// Optimize image
// gulp.task('optimizeImages', () => {
// 	gulp
// 		.src('./app/img-test/team/*')
// 		.pipe(
// 			imagemin({
// 				progressive: true,
// 				interlaced: true,
// 				multipass: true,
// 			})
// 		)
// 		.pipe(gulp.dest('./dist/assets/images'));
// });
