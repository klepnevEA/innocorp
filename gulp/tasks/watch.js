'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/css/**/*.less', $.gulp.series('less'));
    $.gulp.watch('./source/content/**/*.*', $.gulp.series('copy:content'));
    $.gulp.watch('./source/**/*.*', $.gulp.series('copy:html'));
    $.gulp.watch('./source/fonts/**/*.*', $.gulp.series('copy:fonts'));
    $.gulp.watch('./source/html/**/*.*', $.gulp.series('copy:html'));
    $.gulp.watch('./source/img/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch('./source/scripts/**/*.*', $.gulp.series('copy:scripts'));
  });
};

