import React from 'react'
import {Panel} from './styles'
import Book from '../Book'

const DetailPanel = ({book}) => {
  return (
    <Panel>
      <Book book={book} isLarge={true} />

      <p>{book.description}</p>
      <p>
        <em>Published in {book.published}</em>
      </p>
    </Panel>
  )
}

export default DetailPanel
