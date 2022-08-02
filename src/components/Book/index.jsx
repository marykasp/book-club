import React from 'react'
import {Container, Cover, Title, Author} from './styles'

const Book = ({book, pickBook, isLarge}) => (
  <Container $isLarge={isLarge} onClick={() => pickBook(book)}>
    <Cover src={book.image} alt={`Book cover for ${book.title} by ${book.author}`} />
    <figcaption>
      <Title $isLarge={isLarge}>{book.title}</Title>
      <Author>{book.author}</Author>
    </figcaption>
  </Container>
)

export default Book
