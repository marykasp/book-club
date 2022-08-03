import styled from 'styled-components'

export const Container = styled.div`
  background-color: #eceef9;
  padding: 160px;
  overflow: ${({$isPanelOpen}) => ($isPanelOpen ? 'hidden' : 'scroll')};
  position: ${({$isPanelOpen}) => ($isPanelOpen ? 'fixed' : 'unset')};

  span {
    font-size: 20px;
    color: #F173A6;
    font-weight: 600;
    display: inline-block;
    margin-top: 10px;
  }
  @media (max-width: 800px) {
    padding: 114px 20px;
  }
`
export const H2 = styled.h2`
  font-size: 42px;
  margin: 0 0 10px 0;
  color: #333f54;
  position: relative;
  padding-bottom: 2px;
  width: 75%;
  h4 {
    display: inline-block;
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

  @media (max-width: 800px) {
    font-size: 32px;
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
