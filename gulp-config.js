const env = require("./gulp-env")();
const imgExtensions = "jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF,svg";

module.exports = () => {
  const config = {
    html: {
      source: `${env.srcPath}/**/*.{html,htm,php}`,
      build: `${env.buildPath}/`,
    },
    styles: {
      source: `${env.srcPath}/**/styles/**/*.{sass,scss,css}`,
      build: `${env.buildPath}/`,
    },
    scripts: {
      source: `${env.srcPath}/**/scripts/**/*.js`,
      build: `${env.buildPath}/`,
    },
    images: {
      source: `${env.srcPath}/**/images/**/*.{${imgExtensions}}`,
      build: `${env.buildPath}/`,
    },
    zips: {
      source: `${env.buildPath}/Projects`,
      build: "./zips",
    },
    browserSync: {
      port: env.port,
      ghostMode: {
        clicks: true,
        location: true,
        forms: true,
        scroll: true,
      },
      injectChanges: true,
      notify: true,
      reloadDelay: 0,
    },
    options: {
      autoPrefixerOptions: ["last 4 versions", "> 9%"],
      sass: {
        outputStyle: "expanded",
      },
    },
  };

  return config;
};
