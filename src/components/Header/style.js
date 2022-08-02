import styled from 'styled-components'
import {ReactComponent as LogoSVG} from '../../assets/logo.svg'

export const Logo = styled(LogoSVG)`
  height: 40px;
  width: 270px;
  display: block;
  color: #fff;

  @media (max-width: 800px) {
    height: 33px;
    width: 222px;
  }
`

export const HeaderContainer = styled.header`
  background: #fdfdfd;
  padding: 20px 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  z-index: 2;
  a {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  @media (max-width: 800px) {
    padding: 40px;
  }
`
