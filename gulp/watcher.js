const { watch, series } = require("gulp");
const { reload, stream } = require("./browser-sync");

const { src: sassSrc, default: compileStyles } = require("./styles");
const { src: imgSrc, default: compileImages } = require("./images");
const { src: htmlSrc, default: compileHTML } = require("./html");
const { src: jsSrc, default: compileScripts } = require("./scripts");

function watcher() {
  watch(sassSrc, series(compileStyles, reload));
  watch(imgSrc, series(compileImages, reload));
  watch(htmlSrc, series(compileHTML, reload));
  watch(jsSrc, series(compileScripts, reload));
}

exports.default = watcher;
