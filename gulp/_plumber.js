const $ = require("gulp-load-plugins")({ lazy: true });

function customPlumber(errTitle) {
  return $.plumber({
    errorHandler: $.notify.onError({
      // Customizing error title
      title: errTitle || "Error running Gulp",
      message: "Error: <%= error.stack %>",
    }),
  });
}

module.exports = customPlumber;
