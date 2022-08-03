import styled from 'styled-components'
import { Pill } from '../../styles'

export const Panel = styled.article`
  background-color: #59567f;
  height: calc(100vh - 82px);
  width: 660px;
  position: fixed;
  border-left: 3px solid #fff;
  z-index: 2;
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
    width: 100vw;
    height: calc(100vh - 100px);
    bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100vh')};
    right: unset;
    z-index: 3;
  }
`



export const CloseWrapper = styled(Pill)`
  display: ${({$state}) => ($state === 'entered' ? 'flex' : 'none')};
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
