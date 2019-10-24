const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });

const { html } = require("./_config");

const src = html.source;
const build = html.build;

function compileHTML() {
  return gulp
    .src(src)
    .pipe($.changed(build))
    .pipe(gulp.dest(build));
}

exports.src = src;
exports.default = compileHTML;
