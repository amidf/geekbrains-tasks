import styled from "styled-components"

export const Container = styled.aside`
  width: 320px;
  background-color: #333c4e;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
`

export const List = styled.ul`
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  margin: 0;
  width: 100%;
  background-color: ${props => (props.active ? "#293140" : "transparent")};

  a {
    min-height: 56px;
    width: 100%;
    padding: 0 16px;

    display: flex;
    align-items: center;

    font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", Roboto,
      Oxygen, "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    color: #9facc0;
    border-bottom: 1px solid #9facc0;
  }
`
