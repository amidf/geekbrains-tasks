import React from "react"
import "bulma/css/bulma.min.css"
import "prismjs/themes/prism.css"

import Sidebar from "components/Sidebar"

import * as S from "./styled"

const Layout = ({ location, children }) => {
  return (
    <S.Container>
      <S.GlobalStyle />
      <Sidebar location={location} />
      <main className="content">
        <div className="inner">{children}</div>
      </main>
    </S.Container>
  )
}

export default Layout
