const yargs = require("yargs");

const env = process.env.ENV;

const srcPath = "./src";
const buildPath = "./build";
const tmpPath = "./_tmp";
const siteInstanceName = "./";

module.exports = {
  srcPath,
  buildPath,
  tmpPath,
  siteInstanceName,
  env,
  html: {
    source: `${srcPath}/**/*.{html,htm,php,cshtml}`,
    build: `${buildPath}/`,
  },
  styles: {
    source: `${srcPath}/sass/**/*.{sass,scss,css}`,
    build: `${buildPath}/styles/`,
    options: {
      sass: { outputStyle: "compressed" },
    },
  },
  scripts: {
    source: `${srcPath}/scripts/**/*.js`,
    build: `${buildPath}/scripts/`,
  },
  images: {
    source: `${srcPath}/images/**/*`,
    build: `${buildPath}/images/`,
    options: {
      sizes: [400, 900, 1300],
    },
  },

  devURL: yargs.url ? yargs.url : siteInstanceName,

  browserSyncSettings: {
    port: yargs.port ? yargs.port : process.env.PORT || 3000,
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
};
