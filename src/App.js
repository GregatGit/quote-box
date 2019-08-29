import React, { useState } from 'react'
import DisplayQuote from './components/DisplayQuote'

import { randomiser } from './utils'
import { quotes } from './data'
import './styles.scss'

function App() {
  let startIndex = randomiser(quotes.length, [])
  const [index, setIndex] = useState(startIndex)
  const [usedQuotes, setUsedQuotes] = useState([])

  function changeQuotesArr() {
    let newIndex = randomiser(quotes.length, usedQuotes, index)
    setIndex(newIndex)
    setUsedQuotes([...usedQuotes, index])

    // reset the quotes if they have been all used
    if (usedQuotes.length === quotes.length - 1) {
      setUsedQuotes([index])
    }
  }

  const quote = {
    quote: quotes[index].quote,
    author: quotes[index].author,
  }

  const href =
    'https://twitter.com/intent/tweet?text=' +
    `${quote.quote} ~ ${quote.author}`

  return (
    <div className="App" id="quote-box">
      
      <div className="mainBox">
        <header className="App-header"><h1>Quote Box</h1></header>
        <DisplayQuote {...quote} />
        <button id="new-quote" onClick={changeQuotesArr}>
          New Quote
        </button>

        <div>
          <a
            id="tweet-quote"
            href={href}
            data-size="large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
