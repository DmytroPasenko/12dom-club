const {
  LOCALES,
  DEF_LOCALE,
  API_SITE_ID,
  API_ENDPOINT,
} = require("./app-config");

// const siteAddress = new URL("https://12dom.club");

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: "12dom.club",
    description: "12dom.club",
    siteUrl: "https://12dom.club",
    author: "hypersoft.io",
  },
  plugins: [
    "gatsby-plugin-postcss",
    // "gatsby-plugin-sass",
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
        url: API_ENDPOINT,
        headers: {
          Authorization: JSON.stringify({
            siteID: API_SITE_ID,
          }),
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
          ns: ["404", "about", "footer", "site"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        dictionary: "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789",
        enable: process.env.NODE_ENV === "production",
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300"],
            },
            {
              family: "Roboto Condensed",
              variants: ["300ital"],
            },
            {
              family: "Oswald",
              variants: ["300"],
              subsets: ["latin", "cyrillic"],
            },
          ],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-s3`,
    //   options: {
    //     bucketName: "12dom.club",
    //     protocol: siteAddress.protocol.slice(0, -1),
    //     hostname: siteAddress.hostname,
    //     region: "eu-central-1",
    //   },
    // },
  ],
};
