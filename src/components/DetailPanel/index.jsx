import React from 'react'
import {Panel, P, EM, Close, CloseWrapper, BG} from './styles'
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

        <P>{book.description}</P>
        <P>
          <EM>Published in {book.published}</EM>
        </P>
      </Panel>
    </>
  )
}

export default DetailPanel
