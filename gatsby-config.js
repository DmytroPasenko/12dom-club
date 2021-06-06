const { DEF_LOCALE, API_SITE_ID } = require("./app-config");
const { LOCALES } = require("./app-config");

// https://jakubjafra.github.io/gatsby-deployment-to-cloudfront-using-serverless/
const siteAddress = new URL("https://12dom.club");

module.exports = {
  siteMetadata: {
    title: "12dom.club",
    description: "12dom.club",
    siteUrl: "https://12dom.club",
    author: "12dom.club",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-dts-css-modules",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-remove-trailing-slashes",

    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/content/products`,
    //     name: "products",
    //   },
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "CMSAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "cmsApi",
        // Url to query from
        url: "https://yw3rvw9q62.execute-api.eu-west-1.amazonaws.com/prod/graphql",
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          SiteID: API_SITE_ID,
        },
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        usePreload: true,
        usePreconnect: true,
        fonts: {
          google2: [
            {
              family: "Roboto",
              axes: "wght@300;400;500;700",
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: DEF_LOCALE,
        configPath: require.resolve(`./i18n/config.json`),
        locales: LOCALES.join(" "),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./i18n/react-i18next`,
        i18nextOptions: {
          ns: ["site", "company", "footer", "about", "contact", "404"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "12dom.club",
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
        region: "eu-central-1",
      },
    },
  ],
};
