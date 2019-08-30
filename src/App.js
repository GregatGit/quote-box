import React, { useState } from 'react'
import DisplayQuote from './components/DisplayQuote'
import ButtonTweet from './components/ButtonTweet'

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

  return (
    <div className="App" id="quote-box">
      <div className="mainBox">
        <header className="App-header">
          <h1>Quote Box</h1>
        </header>
        <DisplayQuote {...quote} />
        <div>
          <ButtonTweet {...quote} />
          <button id="new-quote" onClick={changeQuotesArr}>
            <b>NEW QUOTE</b>
          </button>
        </div>
      </div>
      <div>
      <footer>a freeCodeCamp challenge by Greg Duncan</footer>
      </div>
    </div>
  )
}

export default App
