const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });
const plumber = require("./_plumber");

const { styles } = require("./_config");

const src = styles.source;
const build = styles.build;

function compileStyles() {
  console.log(src);
  console.log(build);
  return gulp
    .src(src)
    .pipe($.sourcemaps.init())
    .pipe(plumber("Error running sass"))
    .pipe($.sass(styles.options.sass))
    .pipe(gulp.dest(build));
}

exports.src = src;
exports.default = compileStyles;
