import React from 'react'
import {Container, Cover, Title, Author} from './styles'

const Book = ({book, pickBook, isLarge}) => (
  <Container $isLarge={isLarge} onClick={() => pickBook(book)}>
    <Cover
      src={book.book_image}
      alt={`Book cover for ${book.title} by ${book.author}`}
      $isLarge={isLarge}
    />
    <figcaption>
      <Title $isLarge={isLarge}>{book.title}</Title>
      <Author $isLarge={isLarge}>{book.author}</Author>
    </figcaption>
  </Container>
)

export default Book
