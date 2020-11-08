module.exports = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      pages: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
          }
          html
        }
      }
    }
  `)

  data.pages.nodes.forEach(page => {
    actions.createPage({
      path: `/${page.frontmatter.slug}`,
      component: require.resolve("../src/templates/TaskPage/index.jsx"),
      context: {
        title: page.frontmatter.title,
        html: page.html,
      },
    })
  })
}
