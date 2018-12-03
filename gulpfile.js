const gulp = require("gulp");
const env = require("./gulp-env")();
const config = require("./gulp-config")();
const fs = require("file-system");
const $ = require("gulp-load-plugins")({ lazy: true });
const browserSync = require("browser-sync").create();
const del = require("del");

const Tasks = (function() {
  function compileStyles() {
    return gulp
      .src(config.styles.source)
      .pipe(Jobs.error())
      .pipe($.sourcemaps.init())
      .pipe($.sass(config.options.sass))
      .pipe($.autoprefixer(config.options.autoPrefixerOptions))
      .pipe($.sourcemaps.write("./"))
      .pipe(gulp.dest(config.styles.build))
      .pipe(browserSync.stream());
  }

  function compileScripts() {
    return gulp
      .src(config.scripts.source)
      .pipe(Jobs.error())
      .pipe($.changed(config.scripts.build))
      .pipe($.babel())
      .pipe(gulp.dest(config.scripts.build))
      .pipe(browserSync.stream());
  }

  function moveScripts() {
    const destinations = fs.readdirSync(`${env.srcPath}/Projects`);
    let pipeLine = gulp.src(`${env.buildPath}/scripts/*.js`);

    destinations.forEach(d => {
      pipeLine = pipeLine.pipe(gulp.dest(`${env.buildPath}/Projects/${d}/scripts`));
    });

    return pipeLine;
  }

  function zipProjects() {
    const projectNames = fs.readdirSync(`${env.buildPath}/Projects`);
    let pipeLine;

    projectNames.forEach(name => {
      pipeLine = gulp.src(`${env.buildPath}/Projects/${name}/*`);
      pipeLine = pipeLine.pipe($.zip(`${name}.zip`));
      pipeLine = pipeLine.pipe(gulp.dest(`${config.zips.build}`));
    });

    return pipeLine;
  }

  function compileHTML() {
    return gulp
      .src(config.html.source)
      .pipe($.changed(config.html.build))
      .pipe(gulp.dest(config.html.build));
  }

  function compileImages() {
    return gulp
      .src(config.images.source)
      .pipe($.changed(config.images.build))
      .pipe(gulp.dest(config.images.build));
  }

  return {
    compileStyles: compileStyles,
    compileScripts: compileScripts,
    moveScripts: moveScripts,
    compileHTML: compileHTML,
    compileImages: compileImages,
    zipProjects: zipProjects,
  };
})();

const Server = (function() {
  function reload(next) {
    browserSync.reload();
    next();
  }

  function start(next) {
    if (env.devURL == "./") {
      config.browserSync["server"] = {
        baseDir: `${env.buildPath}/`,
      };
    } else {
      config.browserSync["proxy"] = env.devURL;
    }
    browserSync.init(null, config.browserSync);
    next();
  }
  return {
    reload: reload,
    start: start,
  };
})();

const Jobs = (function() {
  function clean() {
    return del([env.buildPath, config.zips.build]);
  }

  function watch() {
    gulp.watch(config.styles.source, gulp.series(Tasks.compileStyles));
    gulp.watch(config.scripts.source, gulp.series(Tasks.compileScripts, Server.reload));
    gulp.watch(config.html.source, gulp.series(Tasks.compileHTML, Server.reload));
    gulp.watch(config.images.source, gulp.series(Tasks.compileImages, Server.reload));
  }

  function errorHandler() {
    return $.plumber({
      errorHandler: function(err) {
        $.notify.onError({
          title: `Error : ${err.plugin}`,
          message: `Issue : ${err}`,
          sound: false,
        })(err);

        /* eslint-disable no-console */
        console.log(`

  /////////////////////////////////////
  /////////////////////////////////////
  Error: ${err.plugin}
  Issue : ${err}
  /////////////////////////////////////
  /////////////////////////////////////

  `);
        this.emit("end");
      },
    });
  }

  return {
    clean: clean,
    watch: watch,
    error: errorHandler,
  };
})();

gulp.task(
  "start-local",
  gulp.series(
    Jobs.clean,
    gulp.parallel(Tasks.compileStyles, Tasks.compileHTML, Tasks.compileScripts, Tasks.compileImages),
    Tasks.moveScripts,
    Server.start,
    Jobs.watch,
  ),
);

gulp.task(
  "build-projects",
  gulp.series(
    Jobs.clean,
    gulp.parallel(Tasks.compileStyles, Tasks.compileHTML, Tasks.compileScripts, Tasks.compileImages),
    Tasks.moveScripts,
  ),
);

gulp.task("zip", gulp.series("build-projects", Tasks.zipProjects));

gulp.task("clean", gulp.series(Jobs.clean));
