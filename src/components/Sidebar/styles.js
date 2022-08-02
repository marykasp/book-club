import styled from 'styled-components'

export const Nav = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 140px;
  height: 100vh;
  background-color: #f7a90c;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
  z-index: 1;

  ul {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    list-style: none;
    font-weight: 600;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      span {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
`
