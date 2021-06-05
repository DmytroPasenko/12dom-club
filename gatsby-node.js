const { LOCALES } = require("./app-config");

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

/*
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const productTemplate = require.resolve(
    `./src/templates/Product/Product.tsx`,
  );

  const queryResult = await graphql(`
    query {
      products: allProductsJson(sort: { fields: position }) {
        nodes {
          slug
        }
      }
    }
  `);

  if (queryResult.errors) {
    reporter.panicOnBuild(queryResult.errors);
    return;
  }

  queryResult.data.products.nodes.forEach((node) => {
    const { slug } = node;

    LOCALES.forEach((locale) => {
      createPage({
        path: `/product/${slug}`,
        component: productTemplate,
        context: {
          slug,
          locale,
        },
      });
    });
  });
};
*/
