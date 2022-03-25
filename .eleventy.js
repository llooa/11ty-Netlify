module.exports = eleventyConfig => {

    //const markdownIt = require('markdown-it')
   // const markdownItAttrs = require('markdown-it-attrs')
  
    /*const markdownItOptions = {
      html: true,
      breaks: true,
      linkify: true
    }

    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

    
    eleventyConfig.setLibrary('md', markdownLib);
    eleventyConfig.markdownTemplateEngine = 'njk';
*/

eleventyConfig.addPassthroughCopy("src/assets");
eleventyConfig.addPassthroughCopy("src/admin");
eleventyConfig.markdownTemplateEngine = 'njk';

eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
