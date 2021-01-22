module.exports = {
  siteMetadata: {
    title: "Art Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "vaMr6XX2732cCq8DkDwmhP4GrZPMNLuY-kzvpvd6tZE",
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
