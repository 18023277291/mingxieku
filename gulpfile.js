var gulp=require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var connect = require('gulp-connect');
gulp.task('conect', function() {
  connect.server({
    root: 'dist',
    livereload: true,
		port:8888
  });
});
gulp.task('allfile',function(){ //加载所有文件
	gulp.src(['app/**/*','!app/css/*.scss'])
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
});
gulp.task('Sass', function () { //css代码预编译
	return gulp.src('app/css/*.scss')
    .pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/css'))
		.pipe(connect.reload());
});
gulp.task('html',function(){ //加载所有文件
	gulp.src('app/branchPage/*.html')
	.pipe(gulp.dest('dist/branchPage'))
	.pipe(connect.reload());
});
gulp.task('indexHtml',function(){ //首页监听
	gulp.src('app/*.html')
	.pipe(gulp.dest('dist/'))
	.pipe(connect.reload());
});
gulp.task('js',function(){	//js代码监听
	gulp.src('app/javascript/*.js')
	.pipe(gulp.dest('dist/javascript'))
	.pipe(connect.reload());
})
gulp.task('ajaxApi',function(){	//api接口代码监听
	gulp.src('app/ajaxApi/*.js')
	.pipe(gulp.dest('dist/ajaxApi'))
})
gulp.task('commecss',function(){	//api接口代码监听
	gulp.src('app/comme.css/*.css')
	.pipe(gulp.dest('dist/comme.css'))
})
gulp.task('commejs',function(){	//api接口代码监听
	gulp.src('app/comme.js/*.js')
	.pipe(gulp.dest('dist/comme.js'))
})
gulp.task('imgchange',function(){	//api接口代码监听
	gulp.src('app/images/*')
	.pipe(gulp.dest('dist/images'))
})
gulp.task('htmlWatch',function(){//监听css改变事件
	gulp.watch('app/branchPage/*.html',['html'])
	gulp.watch('app/*.html',['indexHtml'])
	gulp.watch('app/css/*.scss',['Sass'])
	gulp.watch('app/javascript/*.js',['js'])
	gulp.watch('app/ajaxApi/*.js',['ajaxApi'])
	gulp.watch('app/comme.css/*.css',['commecss'])
	gulp.watch('app/comme.js/*.js',['commejs'])
	gulp.watch('app/images/*',['imgchange'])
});

gulp.task('default',['allfile','Sass','conect','htmlWatch'])
