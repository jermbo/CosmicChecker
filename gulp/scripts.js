const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });
const plumber = require("./_plumber");
const fs = require("fs");
const path = require("path");
const { srcPath, buildPath, scripts, projects } = require("./_config");

const src = scripts.source;
const build = scripts.build;
const directories = projects.directories;

function transpileScripts() {
  return gulp
    .src(src)
    .pipe(plumber("Error Running Scripts"))
    .pipe($.changed(build))
    .pipe($.babel())
    .pipe(gulp.dest(build));
}

function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

function moveScripts() {
  const destinations = directories.map(d => getFolders(`${srcPath}/Projects/${d}`));
  let pipeLine = gulp.src(`${build}/*.js`);

  destinations.forEach((dest, i) => {
    dest.forEach(d => {
      const output = `${buildPath}/Projects/${directories[i]}/${d}/scripts`;
      pipeLine = pipeLine.pipe(gulp.dest(output));
    });
  });

  return pipeLine;
}

const compileScripts = gulp.series(transpileScripts, moveScripts);

exports.src = src;
exports.default = compileScripts;
