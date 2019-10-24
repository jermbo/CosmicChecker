const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });
const plumber = require("./_plumber");

const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const babelify = require("babelify");
const browserify = require("browserify");

const { scripts } = require("./_config");

const src = scripts.source;
const build = scripts.build;

var jsSRC = "./src/scripts/";
var jsFront = "app.js";
var jsFiles = [jsFront, "dashboard.js", "playground.js"];

function bundleScripts(next) {
  jsFiles.map(entry => {
    return browserify({
      entries: [jsSRC + entry],
    })
      .transform(babelify)
      .bundle()
      .pipe(source(entry))
      .pipe(plumber("Error Running Scripts"))
      .pipe(buffer())
      .pipe($.if($.options.has("production"), $.stripDebug()))
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.uglify())
      .pipe($.sourcemaps.write("."))
      .pipe(gulp.dest(build));
  });
  next();
}

function compileScripts() {
  return gulp
    .src(src)
    .pipe(plumber("Error Running Scripts"))
    .pipe($.changed(build))
    .pipe($.babel())
    .pipe(gulp.dest(build));
}

exports.src = src;
exports.bundle = bundleScripts;
exports.default = compileScripts;
