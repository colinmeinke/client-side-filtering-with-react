var babel = require( 'gulp-babel' );
var babelify = require( 'babelify' );
var browserify = require( 'browserify' );
var gulp = require( 'gulp' );
var lint = require( 'gulp-eslint' );
var nodemon = require( 'gulp-nodemon' );
var stream = require( 'vinyl-source-stream' );

gulp.task( 'lint', function () {
  return gulp.src([
    './gulpfile.js',
    './lib/**/*.js',
  ])
    .pipe( lint())
    .pipe( lint.format());
});

gulp.task( 'compileServer', [ 'lint' ], function () {
  return gulp.src( './lib/server.js' )
    .pipe( babel())
    .pipe( gulp.dest( './dist' ));
});

gulp.task( 'compileBrowser', [ 'lint' ], function () {
  return browserify({
    'entries': [
      './lib/app.js',
    ],
  })
    .transform( babelify )
    .bundle()
    .pipe( stream( 'app.js' ))
    .pipe( gulp.dest( './dist' ));
});

gulp.task( 'compile', [ 'compileServer', 'compileBrowser' ]);

gulp.task( 'start', function () {
  return nodemon({
    'script': 'dist/server.js',
    'ext': 'js,html',
    'ignore': [
      'dist/*',
      'node_modules/**/*',
    ],
    'tasks': [ 'compile' ],
  });
});

gulp.task( 'default', [ 'start' ]);
