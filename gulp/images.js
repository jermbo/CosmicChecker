const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });

const { images } = require("./_config");

const src = images.source;
const build = images.build;


function copyPSDsToDist() {
  return gulp.src(`${src}.psd`).pipe(gulp.dest(build));
}

function copyImagesToDist() {
  return gulp.src(`${src}.{jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF,svg}`).pipe(gulp.dest(build));
}

function copySvgToDist() {
  return gulp.src(`${src}.svg`).pipe(gulp.dest(build));
}

const compileImages = gulp.series(copyImagesToDist, copySvgToDist, copyPSDsToDist);

exports.src = src;
exports.default = compileImages;
