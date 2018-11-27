const env = require("./gulp-env")();
const imgExtensions = "jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF,svg";

module.exports = () => {
  const config = {
    html: {
      source: `${env.srcPath}/**/*.{html,htm,php}`,
      build: `${env.buildPath}/`,
    },
    styles: {
      source: `${env.srcPath}/sass/**/*.{sass,scss,css}`,
      build: `${env.buildPath}/styles/`,
    },
    scripts: {
      source: `${env.srcPath}/scripts/**/*.js`,
      build: `${env.buildPath}/scripts/`,
    },
    images: {
      source: `${env.srcPath}/images/**/*.{${imgExtensions}}`,
      build: `${env.buildPath}/images/`,
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
        outputStyle: "compressed",
      },
      formatting: {
        indent_size: 4,
        indent_char: " ",
        indent_with_tabs: false,
        preserve_newlines: true,
        max_preserve_newlines: 5,
        space_after_anon_function: true,
        brace_style: "collapse",
        break_chained_methods: false,
        keep_array_indentation: true,
        end_with_newline: true,
        operator_position: "before-newline",
        indent_inner_html: false,
        indent_scripts: "normal",
        wrap_line_length: 0,
        css: {
          selector_separator_newline: false,
        },
      },
    },
  };

  return config;
};
