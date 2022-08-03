import styled from "styled-components";
import { Pill } from "../../styles";
import {ReactComponent as MagnifyingIcon} from "../../assets/search.svg"

export const SearchContainer = styled(Pill)`
  height: 35px;
  width: ${({$showOnDesktop}) => ($showOnDesktop ? '420px' : '40px')};
  transition: 300ms;

  /* @media (max-width: 800px) {
    width: 85px;
  } */

  input,
  button {
    display: ${({$showOnDesktop}) => ($showOnDesktop ? 'block' : 'none')};

    /* @media(max-width: 800px) {
      display: block;
    } */
  }


`

export const Input = styled.input`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
`

export const Icon = styled(MagnifyingIcon)`
  width: 20px;
  cursor: pointer;
`


