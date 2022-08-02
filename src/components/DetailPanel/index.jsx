import React, {useEffect, useRef} from 'react'
import {Panel, Close, CloseWrapper, BG} from './styles'
import Book from '../Book'

const DetailPanel = ({book, closePanel, state}) => {
  const panelEl = useRef(null)
  const prevBook = useRef(null)

  // depenndenncy array - effect will run when one of those changes
  useEffect(() => {
    if (prevBook.current !== book) {
      panelEl.current.scrollTop = 0
    }
  }, [book, prevBook])
  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>

        {book && (
          <>
            <Book book={book} isLarge={true} />
            <p>{book.description}</p>
            <p>
              <em>
                Published by <span>{book.publisher}</span>
              </em>
            </p>
          </>
        )}
      </Panel>
    </>
  )
}

export default DetailPanel
