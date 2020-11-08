import React from "react"
import { Link } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/SEO"

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Не найдено" />
    <h1>Эта страница не найдена</h1>
    <p>
      <Link to="/">Вернуться назад на главную</Link>
    </p>
  </Layout>
)

export default NotFoundPage
