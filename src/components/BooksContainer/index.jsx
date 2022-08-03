import React from 'react'
import {BookList, Container, H2} from './styles'
import Book from '../Book'

const BooksContainer = ({books, results, pickBook, isPanelOpen}) => {
  let bestSellerDate = new Date(results.bestsellers_date).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  // Fri Jul 22 2022 19:00:00 GMT-0500 (Central Daylight Time)

  console.log(bestSellerDate)
  return (
    <Container $isPanelOpen={isPanelOpen}>
      {results.lists ? (
      <>
      <H2>Top Five: <h4>{results.lists[2].list_name}</h4></H2>
      <span>{bestSellerDate}</span>
      </>
      ) :  (
      <>
        <H2>{results.list_name}</H2>
        <span>{bestSellerDate}</span>
      </>
      )}



      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
