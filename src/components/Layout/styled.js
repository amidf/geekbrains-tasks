import styled, { createGlobalStyle } from "styled-components"

export const Container = styled.div`
  display: flex;

  main {
    width: 100%;
    margin-left: 320px;
    padding: 120px 32px 120px 32px;

    .inner {
      width: 100%;
      max-width: 720px;
      margin: 0 auto;
    }
  }
`

export const GlobalStyle = createGlobalStyle`
  .tag:not(body) {
    align-items: inherit;
     background-color: inherit;
     border-radius: inherit; 
     color: inherit; 
     display: inherit; 
     font-size: inherit; 
     height: inherit; 
     justify-content: inherit; 
     line-height: inherit; 
     padding-left: inherit; 
     padding-right: inherit; 
     white-space: inherit;
  }
`
