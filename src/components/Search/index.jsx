import React, {useRef, useState} from 'react'
import { SearchContainer, Input, Icon } from './styles'
import { Close, Wrapper } from '../../styles'


const Search = ({filterBooks}) => {
  const [showOnDesktop, setShowOnDesktop] = useState(false)
  const inputEl = useRef(null)
  const handleChange = (event) => {
    console.log(event.target.value)
    filterBooks(event.target.value)
  }

  const clearSearch = () => {
    filterBooks('')
    inputEl.current.value = ''
    setShowOnDesktop(false)
  }

  const showSearch = () => {
    setShowOnDesktop(true)
  }

  return (
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch}/>
        <Input ref={inputEl} type="text" name="search" autoComplete="off" onChange={handleChange}/>
        <Close onClick={clearSearch}/>
      </SearchContainer>
    </Wrapper>
  )
}

export default Search
