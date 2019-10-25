const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });

const { images } = require("./_config");

const src = images.source;
const build = images.build;


function copyPSDsToDist() {
  console.log(`${src}.psd`);
  return gulp.src(`${src}.psd`).pipe(gulp.dest(build));
}

function copyImagesToDist() {
  console.log(`${src}.{jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF,svg}`);
  return gulp.src(`${src}.{jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF,svg}`).pipe(gulp.dest(build));
}

function copySvgToDist() {
  console.log(`${src}.svg`);
  return gulp.src(`${src}.svg`).pipe(gulp.dest(build));
}

const compileImages = gulp.series(
  // gulp.parallel(jpegToWebp, pngToWebp, minifyImages),
  // gulp.parallel(resizeImages),
  gulp.parallel(copyImagesToDist, copySvgToDist, copyPSDsToDist),
);

exports.src = src;
exports.default = compileImages;
