import styled from 'styled-components'

export const Container = styled.figure`
  margin: 0;
  cursor: ${({$isLarge}) => ($isLarge ? 'default' : 'pointer')};
`
// grayscale(100%);
export const Cover = styled.img`
  filter: ${({$isLarge}) => ($isLarge ? 'none' : 'grayscale(100%)')};
  border-radius: 5px;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  width: ${({$isLarge}) => ($isLarge ? '70%' : '100%')};
  border: ${({$isLarge}) => ($isLarge ? 'none' : '2px solid #000')};
  transition: filter 0.3s ease-in-out;

  margin-bottom: 16px;
  &:hover {
    filter: none;
  }
`

export const Title = styled.h3`
  font-size: ${({$isLarge}) => ($isLarge ? '42px' : '28px')};
  margin: 0 0 10px 0;
  line-height: 1.3;
  font-family: 'Playfair Display', serif;
  color: ${({$isLarge}) => ($isLarge ? '#fff' : '#283243')};

  @media (max-width: 800px) {
    font-size: ${({$isLarge}) => ($isLarge ? '32px' : '22px')};
  }
`

export const Author = styled.h4`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: ${({$isLarge}) => ($isLarge ? '#F7A90C' : '#7172E6')};
`
