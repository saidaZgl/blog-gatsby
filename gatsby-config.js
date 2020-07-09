module.exports = {
  siteMetadata: {
    title: `Mon Blog Tech`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Saïda`,
    bio: `Dev JS | Passionnée | Autodidacte, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    authorImage: `https://thumbs.dreamstime.com/z/avatar-de-programmeur-langue-logiciel-110589729.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `blog`, path: `${__dirname}/blog/` },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-less",
      options: {
        modifyVars: require("./src/theme/antd.js"),
        // Needed to load antdesign less files.
        javascriptEnabled: true,
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      lessOptions: {
        // Activate less files
        style: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
