import React, { useRef, useEffect, useState} from 'react'
import {debounce} from 'lodash-es'
import {BookList, Container, H2, SubTitle} from './styles'
import Book from '../Book'

const BooksContainer = ({books, results, pickBook, isPanelOpen, title}) => {
  const [scroll, setScroll] = useState(0)
  const prevPanelState = useRef(false)
  console.log(books)

  // capture y scroll position after 100 milliseconds - after user has scrolled
  // don't want to be constantly rerendered, will only run when isPanelOpen value changes (dependency array)
  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY)
    }, 100)

    //if panel is not open then handle the user scroll
    if(!isPanelOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isPanelOpen])

  // triggered based on the values in the dependency array
  useEffect(() => {
    // if panel is not open and prevPanelState current attribute returns true - call window.scroll and pass in 0 and scroll - scrolls to specific part of browser (x, y)
    if(prevPanelState.current && !isPanelOpen) {
      window.scroll(0, scroll)
    }

    // reassign prevPanelState equal to isPanelOpen - always know if panel was just open or not - maintain vertical scroll position when panel is closed
    prevPanelState.current = isPanelOpen
  }, [isPanelOpen, prevPanelState, scroll])


  let bestSellerDate = new Date(results.bestsellers_date).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  // Fri Jul 22 2022 19:00:00 GMT-0500 (Central Daylight Time)

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      {results.lists ? (
      <>
        <H2>Top Five: <span>{results.lists[2].list_name}</span></H2>
        <span>{bestSellerDate}</span>
      </>
      ) :  (
      <>
        <H2>{results.list_name}</H2>
        <SubTitle>
          <span className="date">{bestSellerDate}</span>
          <span className="subtitle">{title}</span>
        </SubTitle>
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
