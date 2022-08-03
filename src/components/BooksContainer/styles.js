import styled from 'styled-components'

export const Container = styled.div`
  background-color: #eceef9;
  padding: 160px;
  height: 100vh;
  overflow: ${({$isPanelOpen}) => ($isPanelOpen ? 'hidden' : 'scroll')};
  position: ${({$isPanelOpen}) => ($isPanelOpen ? 'fixed' : 'unset')};
  top: ${({$isPanelOpen, $top}) => ($isPanelOpen ? `-${$top}px` : 0)}

  span {
    font-size: 20px;
    color: #F173A6;
    font-weight: 600;
    display: inline-block;
    margin-top: 10px;
  }
  @media (max-width: 800px) {
    padding: 150px 40px;
  }
`

export const SubTitle = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span.date {
    color: #F173a6;
    font-weight: 600;
    font-size: 18px;
  }
  span.subtitle {
    font-weight: 500;
    font-size: 24px;
    color: #7172e6;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      top: 10px;
      left: -20px;
      background-color: #f173a6;
      border-radius: 50%;
    }
  }

  @media (max-width: 800px) {
    width: 95%;
  }

`
export const H2 = styled.h2`
  font-size: 42px;
  margin: 0 0 10px 0;
  color: #333f54;
  position: relative;
  padding-bottom: 2px;
  width: 75%;
  span {
    font-size: 42px;
    color: #7172e6;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50px;
    left: 0;
    background-color: #7172e6;
    width: 130px;
    height: 2px;
    margin-top: 8px;
  }


`

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 40px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
`
