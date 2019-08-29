import React from 'react';
import DisplayQuote from './components/DisplayQuote'

function App() {
  return (
    <div className="App" id="quote-box">
      <header className="App-header">
        <h1>Quote Box</h1>
      </header>
      <DisplayQuote />
      <button id="new-quote">New Quote</button>
      <button id="tweet-quote">Tweet Quote</button>
    </div>
  );
}

export default App;
