const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: true });
const fs = require("fs");
const { buildPath, zips } = require("./_config");

function zipProjects() {
  const projectNames = fs.readdirSync(`${buildPath}/Projects`);
  let pipeLine;

  projectNames.forEach(name => {
    pipeLine = gulp.src(`${buildPath}/Projects/${name}/**/*`);
    pipeLine = pipeLine.pipe($.zip(`${name}.zip`));
    pipeLine = pipeLine.pipe(gulp.dest(`${zips.build}`));
  });

  return pipeLine;
}

exports.default = zipProjects;
