const sass = require("sass");
const { DateTime } = require("luxon");
const fs = require("fs-extra");

module.exports = (eleventyConfig) => {

  // pass files direclty through to the output
  eleventyConfig.addPassthroughCopy("src/site/images");
  eleventyConfig.addPassthroughCopy("src/site/js");

  // watch the scss source files in case of need to regenerate
  eleventyConfig.addWatchTarget("src/scss/");

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

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
