const { buildPath, tmpPath } = require("./_config");
const del = require("del");

function cleanAll() {
  return del([buildPath, tmpPath]);
}

function cleanTmp() {
  return del([tmpPath]);
}

exports.cleanTmp = cleanTmp;
exports.cleanAll = cleanAll;
