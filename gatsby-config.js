module.exports = {
  siteMetadata: {
    title: `A sample site using gatsby-source-wordpress`,
    subtitle: `Data fetched from a site hosted on wordpress.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `blog.maxlibin.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
        searchAndReplaceContentUrls: {
          sourceUrl: "http://blog.maxlibin.com/wp-content/uploads/",
          replacementUrl: "https://blog.maxlibin.com/wp-content/uploads/",
        },
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: ["/wp/v2/search", "/wp/v2/block-renderer"],
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-55191105-2",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-favicon`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-glamor`,
  ],
}
