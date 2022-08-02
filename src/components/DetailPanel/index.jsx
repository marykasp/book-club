import React from 'react'
import {Panel, Close, CloseWrapper, BG} from './styles'
import Book from '../Book'

const DetailPanel = ({book, closePanel, state}) => {
  console.log(state)
  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>

        {book && (
          <>
            <Book book={book} isLarge={true} />
            <p>{book.description}</p>
            <p>
              <em>
                Published in <span>{book.published}</span>
              </em>
            </p>
          </>
        )}
      </Panel>
    </>
  )
}

export default DetailPanel
