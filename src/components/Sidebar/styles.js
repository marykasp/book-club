import styled from 'styled-components'

export const Nav = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 5.6em;
  height: calc(100vh - 22.25rem);
  min-height: 40rem;
  max-height: 50rem;
  margin: 11.53rem 0;
  padding: 2rem 0.825rem;
  background-color: transparent;
  border-radius: 10px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  /* box-shadow: inset 0 0 20px rgba(57, 63, 72, 0.3); */
  z-index: 1;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    width: 100%;
    list-style: none;
    font-weight: 600;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      position: relative;
      transition: all 0.3s ease-in-out;
      &::after {
        content: '';
        position: absolute;
        background-color: #f7a90c;
        height: 10px;
        width: 10px;
        top: 55px;
        left: 27px;
        border-radius: 50%;
      }
      &:hover {
        color: #f7a90c;
        transform: scale(1.2);
      }
    }
  }
`
