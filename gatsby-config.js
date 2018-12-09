module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                postCssPlugins: [require('autoprefixer')()]
            }
        },
        'gatsby-plugin-sass'
    ]
}