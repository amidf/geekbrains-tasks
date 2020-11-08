const path = require("path")

module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "../src/components"),
      },
    },
  })
}
