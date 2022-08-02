import React from 'react'
import {Container, Cover, Title, Author} from './styles'

const Book = ({book, pickBook, isLarge}) => {
  const words = book.title.split(' ')

  const formatWords = words.map((word) => {
    return word[0].toUpperCase() + word.substr(1).toLowerCase()
  })

  // for (let i = 0; i < words.length; i++) {
  //   words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase()
  // }

  return (
    <Container $isLarge={isLarge} onClick={() => pickBook(book)}>
      <Cover
        src={book.book_image}
        alt={`Book cover for ${book.title} by ${book.author}`}
        $isLarge={isLarge}
      />
      <figcaption>
        <Title $isLarge={isLarge}>{formatWords.join(' ')}</Title>
        <Author $isLarge={isLarge}>{book.author}</Author>
      </figcaption>
    </Container>
  )
}

export default Book
