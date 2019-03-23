module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [require('autoprefixer')()]
      }
    }
  ]
}
