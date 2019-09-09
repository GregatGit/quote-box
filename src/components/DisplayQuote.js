import React from 'react'
import { starter } from '../data'

const DisplayQuote = ({ quote, author }) => {
  return (
    <div>
      <h2 id="text"><i id="quote" className="fa fa-quote-left"></i>{quote}</h2>
      <p id="author"><i>{author}</i></p>
    </div>
  )
}

DisplayQuote.defaultProps = {
  quote: starter.quote,
  author: starter.author,
}

export default DisplayQuote
