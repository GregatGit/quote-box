import React from 'react'

const ButtonTweet = ({ quote, author }) => {
  const href = `https://twitter.com/intent/tweet?text=${quote} ~ ${author}`
  return (
    <button>
      <a
        id="tweet-quote"
        href={href}
        data-size="large"
        target="_blank"
        rel="noopener noreferrer"
      >
      
        <i className="fa fa-twitter fa-4x " aria-hidden="true">
          {' '}
        </i>

      </a>
    </button>
  )
}

export default ButtonTweet
