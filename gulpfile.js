var gulp = require('gulp'),
	watch = require('gulp-watch');

gulp.task('build', function () {
	return gulp.src('src/**/*')
		.pipe(gulp.dest('assets'));
});

gulp.task('watch', function () {
	gulp.watch('src/*', ['build'])
});

gulp.task('default', ['build', 'watch']);
