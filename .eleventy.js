module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('scripts');
  return {
    templateFormats: ['njk', 'html', 'md', 'liquid'],
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
