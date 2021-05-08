const gulp = require( 'gulp' ); //Cargamos nuestro modulo gulp
const sass = require( 'gulp-sass') //Cargamos el modulo gulp sass

gulp.task('sass', function() {
	return gulp.src('./sass/main.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});
