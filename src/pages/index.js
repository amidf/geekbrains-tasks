import React from "react"

import Layout from "components/Layout"
import SEO from "components/SEO"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Главная" />
  </Layout>
)

export default IndexPage
