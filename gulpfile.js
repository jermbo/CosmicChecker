require("dotenv").config();

const { series, parallel } = require("gulp");
const { serve } = require("./gulp/browser-sync");
const { default: watcher } = require("./gulp/watcher");
const { default: html } = require("./gulp/html");
const { default: styles } = require("./gulp/styles");
const { default: scripts } = require("./gulp/scripts");
const { cleanAll, cleanTmp } = require("./gulp/clean");
const { default: images } = require("./gulp/images");
const { default: zip } = require("./gulp/zip");

exports.clean = cleanAll;

exports.default = series(cleanTmp, parallel(html, styles, scripts, images), serve, watcher);

exports.compile = series(cleanAll, parallel(html, styles, scripts, images), zip);
