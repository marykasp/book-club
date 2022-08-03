import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Sidebar from './components/Sidebar'
import Search from './components/Search'
import {Transition} from 'react-transition-group'
import {GlobalStyle} from './styles'

const App = () => {
  const [books, setBooks] = useState([])
  const [results, setResults] = useState({})
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState([])


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
          setBooks(books.results.lists[2].books)
          setFilteredBooks(books.results.lists[2].books)
        }
      } catch (errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [])

  // handle event listeners
  const handleClick = async(parameter) => {
    try {
      const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${parameter}?api-key=${process.env.REACT_APP_API_KEY}`)
      if(response.ok) {
        const books = await response.json()
        setResults(books.results)
        setBooks(books.results.books)
        setFilteredBooks(books.results.books)
        // so list is not null in the book container when user page is first rendered
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

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) => {
      return bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())
    }
    // if searchTerm is null then return entire books array
    if(!searchTerm) {
      setFilteredBooks(books)
    } else {
      // iterate over the books and find the books that have the title OR author that includes the searchTerm - save filtered books to a new array
      setFilteredBooks(books.filter(book => (
        stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
      )))
    }
  }


  const hasFiltered = filteredBooks.length !== books.length

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks}/>
      </Header>
      <Sidebar handleClick={handleClick}/>
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        results={results}
        title={hasFiltered ? 'Search results' : 'All books'}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />}
      </Transition>
    </>
  )
}

export default App
