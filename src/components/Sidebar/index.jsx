import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Sidebar = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      items: allMarkdownRemark(sort: { fields: frontmatter___priority }) {
        nodes {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `)

  return (
    <S.Container>
      <S.List>
        {data.items.nodes.map(item => (
          <S.ListItem
            key={item.id}
            active={location.pathname.includes(item.frontmatter.slug)}
          >
            <Link to={`/${item.frontmatter.slug}`}>
              <span>{item.frontmatter.title}</span>
            </Link>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  )
}

export default Sidebar
