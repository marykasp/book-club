import styled from 'styled-components'

export const Panel = styled.article`
  background-color: #59567f;
  height: calc(100vh - 82px);
  width: 660px;
  position: fixed;
  border-left: 3px solid #fff;
  z-index: 4;
  bottom: 0;
  right: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-660px')};
  padding: 40px 120px 60px 40px;
  overflow: scroll;
  transition: 300ms;
  p {
    font-family: 'Open sans', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    margin: 30px 0 0;
    color: #fff;
    em {
      font-style: italic;
      span {
        color: #f7a90c;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    widht: 100vw;
    height: calc(100vh - 75px);
    bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100vh')};
    right: unset;
  }
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
  background: #f7a90c;
  border: 2px solid #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 8px;
  display: ${({$state}) => ($state === 'entered' ? 'flex' : 'none')};
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

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  opacity: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 1 : 0)};
  pointer-events: ${({$state}) => ($state === 'exited' ? 'none' : 'auto')};
  transition: 300ms;
`
