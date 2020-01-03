const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });
const yargs = require("yargs").argv;

const { html } = require("./_config");

const src = html.source;
const build = html.build;

function compileHTML() {
  const removeComments = yargs.removeComments;

  return gulp
    .src(src)
    .pipe($.changed(build))
    .pipe($.if(removeComments, $.stripComments()))
    .pipe(gulp.dest(build));
}

exports.src = src;
exports.default = compileHTML;
