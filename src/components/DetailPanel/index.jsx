import React from 'react'
import {Panel, Close, CloseWrapper, BG} from './styles'
import Book from '../Book'

const DetailPanel = ({book, closePanel}) => {
  return (
    <>
      <BG onClick={closePanel} />
      <Panel>
        <CloseWrapper onClick={closePanel}>
          <Close />
        </CloseWrapper>
        <Book book={book} isLarge={true} />

        <p>{book.description}</p>
        <p>
          <em>
            Published in <span>{book.published}</span>
          </em>
        </p>
      </Panel>
    </>
  )
}

export default DetailPanel
