import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open sans', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
`

export const Pill = styled.div`
  background: #f7a90c;
  border: 2px solid #000;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
`

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;

  /* create the close icon inside the button */
  &::before,
  &::after {
    content: '';
    background-color: #000;
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 9px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    background: #59567F;
    border-top: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 100vw;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
  }
`
