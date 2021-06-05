const { DEF_LOCALE } = require("./app-config");
const { LOCALES } = require("./app-config");

// https://jakubjafra.github.io/gatsby-deployment-to-cloudfront-using-serverless/
const siteAddress = new URL("https://12dom.club");

module.exports = {
  siteMetadata: {
    title: "12dom.club",
    description:
      "12dom.club",
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
    "gatsby-transformer-remark",
    // {
    //   resolve: "gatsby-plugin-webfonts",
    //   options: {
    //     usePreload: true,
    //     usePreconnect: true,
    //     fonts: {
    //       google2: [
    //         {
    //           family: "Barlow",
    //           axes: "ital,wght@0,500;0,700;1,500;1,700",
    //         },
    //         {
    //           family: "Amatic SC",
    //           axes: "wght@700",
    //         },
    //       ],
    //     },
    //   },
    // },
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
          ns: [
            "site",
            "company",
            "footer",
            "about",
            "contact",
            "404",
          ],
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
