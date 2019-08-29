import React, { useState } from 'react'
import DisplayQuote from './components/DisplayQuote'

import { randomiser } from './utils'
import { quotes } from './data'

function App() {
  //let startIndex = randomiser(quotes.length, [])
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length))
  const [usedQuotes, setUsedQuotes] = useState([])

  function changeQuotesArr() {
    
    let newIndex = randomiser(quotes.length, usedQuotes, index)
    

    setIndex(newIndex)
    setUsedQuotes([...usedQuotes, index])
    // reset the quotes if they have been all used
    if (usedQuotes.length === (quotes.length - 1)){
      console.log('hi')
      setUsedQuotes([index])
    }
    console.log(usedQuotes)
  }

  return (
    <div className="App" id="quote-box">
      <header className="App-header">
        <h1>Quote Box</h1>
      </header>
      <DisplayQuote quote={quotes[index].quote} author={quotes[index].author}/>
      <button id="new-quote" onClick={changeQuotesArr}>New Quote</button>
      <button id="tweet-quote">Tweet Quote</button>
    </div>
  )
}

export default App
