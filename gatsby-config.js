require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Art Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        spaceId: "9cds6kneqq0m",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
