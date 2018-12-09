module.exports = {
    plugins: [
        'gatsby-plugin-layout',
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                postCssPlugins: [require('autoprefixer')()]
            }
        }
    ]
}