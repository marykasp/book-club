import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'

const App = () => {
  const [books, setBooks] = useState([])

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

  return <BooksContainer books={books} />
}

export default App
