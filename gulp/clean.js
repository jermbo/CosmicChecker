const { buildPath, tmpPath, zipsPath } = require("./_config");
const del = require("del");

function cleanAll() {
  return del([buildPath, tmpPath, zipsPath]);
}

function cleanTmp() {
  return del([buildPath, tmpPath]);
}

exports.cleanTmp = cleanTmp;
exports.cleanAll = cleanAll;
