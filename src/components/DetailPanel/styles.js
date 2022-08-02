import styled from 'styled-components'

export const Panel = styled.article`
  background-color: #ffe581;
  border-left: 2px solid #000;
  height: calc(100vh - 82px);
  width: 660px;
  position: fixed;
  z-index: 2;
  bottom: 0;
  right: 0;
  padding: 40px 120px 60px 40px;
  overflow: scroll;

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    widht: 100vw;
    height: calc(100vh - 75px);
    bottom: 0;
    right: unset;
  }
`

export const P = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 30px 0 0;
`

export const EM = styled.em`
  font-style: italic;
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

export const CloseWrapper = styled.div`
  background: #a7e1f8;
  border: 2px solid #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  top: 120px;
  right: 40px;
  position: fixed;
  z-index: 4;

  /* move to bottom right corner */
  @media (max-width: 800px) {
    top: unset;
    bottom: 28px;
    right: 20px;
  }
`
