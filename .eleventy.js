const sass = require("sass");
const fs = require("fs-extra");
const { DateTime } = require("luxon");

module.exports = (eleventyConfig) => {

  // pass files direclty through to the output
  eleventyConfig.addPassthroughCopy("src/site/images");
  eleventyConfig.addPassthroughCopy("src/site/js");

// Add some utiliuty filters
module.exports = function (config) {
  config.addFilter("asPostDate", (dateObj) => {
   return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);

    // other config likely here
  });
}

  // watch the scss source files in case of need to regenerate
  eleventyConfig.addWatchTarget("src/scss/");

  // Compile Sass before a build
  eleventyConfig.on("beforeBuild", () => {
    let result = sass.renderSync({
      file: "src/scss/main.scss",
      sourceMap: false,
      outputStyle: "compressed",
    });
    fs.ensureDirSync('dist/css/');
    fs.writeFile("dist/css/main.css", result.css, (err) => {
      if (err) throw err;
      console.log("CSS generated");
    });
  });

  // where do things live?
  return {
    dir: {
      input: "src/site",
      output: "dist"
    }
  };

};
