import React from 'react'
import { starter } from '../data'

const DisplayQuote = ({ quote, author }) => {
  return (
    <div>
      <h2 id="text">{quote}</h2>
      <p id="author">{author}</p>
    </div>
  )
}

DisplayQuote.defaultProps = {
  quote: starter.quote,
  author: starter.author,
}

export default DisplayQuote
