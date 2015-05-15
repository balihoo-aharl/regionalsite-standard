var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch');

gulp.task('build', function () {
	return gulp.src(['src/**/*', '!src/css/sass/**/*'])
		.pipe(gulp.dest('assets'));
});

gulp.task('sass', function () {
	gulp.src('src/css/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/css'));
});

gulp.task('watch', function () {
	gulp.watch('src/css/sass/**/*.scss', ['sass', 'build']);
	gulp.watch(['src/**/*', '!src/css/sass/**/*.scss'], ['build'])
});

gulp.task('default', ['sass', 'build', 'watch']);


// TODO
// * Need a task to clean up files in assets
