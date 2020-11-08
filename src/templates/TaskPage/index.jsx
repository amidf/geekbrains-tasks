import React from "react"

import Layout from "components/Layout"
import SEO from "components/SEO"

const TaskPage = ({ location, pageContext }) => {
  return (
    <Layout location={location}>
      <SEO title={pageContext.title} />
      <div
        dangerouslySetInnerHTML={{
          __html: pageContext.html,
        }}
      ></div>
    </Layout>
  )
}

export default TaskPage
