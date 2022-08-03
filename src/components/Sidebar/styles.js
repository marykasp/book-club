import styled from 'styled-components'

export const Nav = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 5rem;
  height: calc(100vh - 22.25rem);
  min-height: 35rem;
  max-height: 50rem;
  margin: 11.53rem 0;
  padding: 2rem 0;
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
    gap: 20px;
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
        position: absolute;
        top: -20px;
        left: 60px;
        background-color: #F173A6;
        width: 80px;
        height: 20px;
        border-radius: 2px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        transition: all 0.3s ease-in-out;
      }
      }
    }
    li#fiction:hover {
      &::after {
        content: 'fiction'
      }
    }
    li#nonfiction:hover {
      &::after {
        content: 'nonfiction'
      }
    }
    li#advice:hover {
      &::after {
        content: 'advice'
      }
    }
    li#science:hover {
      &::after {
        content: 'science'
      }
    }
    li#animals:hover {
      &::after {
        content: 'animals'
      }
    }
    li#young:hover {
      &::after {
        content: 'YA'
      }
    }
`
