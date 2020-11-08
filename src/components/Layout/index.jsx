import React from "react"

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
