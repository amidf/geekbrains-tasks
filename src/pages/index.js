import React from "react"

import Layout from "components/Layout"
import SEO from "components/SEO"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Главная" />
    <h1>Домашние задания</h1>
    <p>
      Ребята, здесь собраны все домашние задания по урокам. Я буду регулярно
      обновлять список заданий после каждого урока, поэтому сохраните себе
      куда-нибудь эту ссылку.
    </p>
    <p>По всем вопросам пишите мне в Discord. Не стесняйтесь.</p>
  </Layout>
)

export default IndexPage
