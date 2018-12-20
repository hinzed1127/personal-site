module.exports = {
  siteMetadata: {
    title: 'Dan Hinze',
    siteUrl: 'https://www.danhinze.com',
    description: 'Twin Cities saxophonist, musician, & web developer.',
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/words`,
        name: 'words',
      },
    },
  ],
};
