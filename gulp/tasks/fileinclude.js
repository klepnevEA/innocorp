'use strict';

module.exports = function() {
var fileinclude = require('gulp-file-include');


		$.gulp.task('fileinclude', function() {
		  return  $.gulp.src(['./source/**/*.*'])
		    .pipe(fileinclude({
		      prefix: '@@',
		      basepath: '@file'
		    }))
		    .pipe($.gulp.dest($.config.root));
			});


};
