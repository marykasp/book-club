import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import {GlobalStyle} from './styles'
import Sidebar from './components/Sidebar'
import {Transition} from 'react-transition-group'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)

  // fetch data - used for creating side effects, schedules events to happen after component is rendered to DOM
  // useEffect function only needs to run once to fetch data so second parameter does not need to be based on state updates
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        if (response.ok) {
          const books = await response.json()
          console.log('json-ified data', books)
          // update the books state - save the fetch data
          setBooks(books)
        }
      } catch (errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [])

  // helper function
  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <BooksContainer books={books} pickBook={pickBook} isPanelOpen={showPanel} />
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />}
      </Transition>
    </>
  )
}

export default App
