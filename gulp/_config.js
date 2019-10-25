const yargs = require("yargs");

const env = process.env.ENV;

const srcPath = "./src";
const buildPath = "./build";
const zipsPath = "./zips";
const tmpPath = "./_tmp";
const siteInstanceName = "./";

module.exports = {
  srcPath,
  buildPath,
  zipsPath,
  tmpPath,
  siteInstanceName,
  env,
  html: {
    source: `${srcPath}/**/*.{html,htm}`,
    build: `${buildPath}`,
  },
  styles: {
    source: `${srcPath}/**/styles/**/*.{sass,scss,css}`,
    build: `${buildPath}`,
    options: {
      sass: { outputStyle: "expanded" },
    },
  },
  scripts: {
    source: `${srcPath}/**/scripts/**/*.js`,
    build: `${buildPath}`,
  },
  images: {
    source: `${srcPath}/**/images/**/*`,
    build: `${buildPath}`,
    options: {
      sizes: [400, 900, 1300],
    },
  },
  projects: {
    directories: ["BeginnerCSS", "BeginnerHTML"]
  },
  zips: {
    source: `${buildPath}/Projects`,
    build: zipsPath
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
