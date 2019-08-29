import React, { useState, useEffect } from 'react'
import DisplayQuote from './components/DisplayQuote'

import { randomiser } from './utils'
import { quotes } from './data'

function App() {
  const [index, setIndex] = useState(randomiser(quotes.length, []))
  const [usedQuotes, setUsedQuotes] = useState([])

  function updateQuotes() {
    setUsedQuotes([...updateQuotes, index])
    setIndex(randomiser(quotes.length, usedQuotes))
  }

  return (
    <div className="App" id="quote-box">
      <header className="App-header">
        <h1>Quote Box</h1>
      </header>
      <DisplayQuote quote={quotes[index].quote} author={quotes[index].author}/>
      <button id="new-quote">New Quote</button>
      <button id="tweet-quote">Tweet Quote</button>
    </div>
  )
}

export default App
