import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import {GlobalStyle} from './styles'
import Sidebar from './components/Sidebar'
import {Transition} from 'react-transition-group'

const App = () => {
  const [books, setBooks] = useState([])
  const [results, setResults] = useState({})
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)


  // fetch data - used for creating side effects, schedules events to happen after component is rendered to DOM
  // useEffect function only needs to run once to fetch data so second parameter does not need to be based on state updates
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${process.env.REACT_APP_API_KEY}`)
        if (response.ok) {
          const books = await response.json()
          console.log('json-ified data', books.results.lists[2].books)
          // update the books state - save the fetch data
          setResults(books.results)
          console.log(books.results)
          setBooks(books.results.lists[2].books)
        }
      } catch (errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {

  })
  // handle event listeners
  const handleClick = async(parameter) => {
    try {
      const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${parameter}?api-key=${process.env.REACT_APP_API_KEY}`)
      if(response.ok) {
        const books = await response.json()
        console.log(books.results.books)
        setResults(books.results)
        setBooks(books.results.books)
      }
    } catch(error) {
      console.log(error)
    }

  }

  // helper function
  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }



  console.log(process.env)
  return (
    <>
      <GlobalStyle />
      <Header />
      <Sidebar handleClick={handleClick}/>
      <BooksContainer books={books} pickBook={pickBook} isPanelOpen={showPanel} results={results} />
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />}
      </Transition>
    </>
  )
}

export default App
