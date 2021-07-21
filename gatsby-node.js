const { DEF_LOCALE, LOCALES } = require("./app-config");

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve(`./src/templates/Post/Post.tsx`);

  const queryResult = await graphql(`
    query {
      cmsApi {
        posts: table(content: "posts", locale: "${DEF_LOCALE}") {
          slug
        }
      }
    }
  `);

  if (queryResult.errors) {
    reporter.panicOnBuild(queryResult.errors);
    return;
  }

  queryResult.data.cmsApi.posts.forEach((node) => {
    const { slug } = node;

    LOCALES.forEach((locale) => {
      createPage({
        path: `/post/${slug}`,
        component: postTemplate,
        context: {
          slug,
          locale,
        },
      });
    });
  });
};
