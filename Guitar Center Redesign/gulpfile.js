var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var ngAnnotate = require('gulp-ng-annotate');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');

// test task
gulp.task('test',function(){

	console.log('gulp is running');

});

/*######## Developement Task #################*/
// Use gulp watch when in developement

// task to run the webserver
gulp.task('browserSync',function(){

	browserSync.init({
		server:{
			baseDir:'app/'
		}
	});

});

//perform the browserSync task before the watch task
gulp.task('watch',['browserSync'],function(){
	// watch for any file change in app folder and reload it on file change
	gulp.watch('app/**',browserSync.reload);
});


/*############### Production Task ############*/
//use gulp build when in production
//task to optimize images
gulp.task('images',function(){
	return gulp.src('app/Images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('production/Images'));
});

//task to just move the templates
gulp.task('templates',function(){
	return gulp.src('app/templates/**/*')
		.pipe(gulp.dest('production/templates/'));
});

//task to just move the data
gulp.task('data',function(){
	return gulp.src('app/data/**/*')
		.pipe(gulp.dest('production/data/'));
});


//task to minify css and javscript
gulp.task('useref',function(){
	return gulp.src('app/*.html')
			.pipe(useref())
			//Minifies only if its a css file
			.pipe(gulpIf('*.css',autoprefixer('last 2 version','ie 9')))
			.pipe(gulpIf('*.css',cssnano()))
			//Minifies only if its a javascript file
			.pipe(gulpIf('*.js',ngAnnotate({add:true})))
			.pipe(gulpIf('*.js',uglify({ mangle: true })))
			.pipe(gulp.dest('production/'));
});

//task to delete the production folder
gulp.task('clean:dist',function(){
	return del.sync('production');
})

// task to run the webserver
gulp.task('browserSyncProd',function(){

	browserSync.init({
		server:{
			baseDir:'production/'
		}
	});

});

//perform the browserSync task before the watch task
gulp.task('watchProd',['browserSyncProd'],function(){
	// watch for any file change in app folder and reload it on file change
	gulp.watch('app/**',browserSync.reload);
});


gulp.task('build',function(callback){

	runSequence('clean:dist',['useref','templates','data','images'],'watchProd');

});

