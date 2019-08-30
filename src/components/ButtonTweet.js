import React from 'react'

const ButtonTweet = ({ quote, author }) => {
  const href = 'https://twitter.com/intent/tweet?text=' + `${quote} ~ ${author}`
  return (
    <button>
      <a
        id="tweet-quote"
        href={href}
        data-size="large"
        target="_blank"
        rel="noopener"
      >
        <i class="fa fa-twitter " aria-hidden="true">
          {' '}
          tweet it
        </i>
      </a>
    </button>
  )
}

export default ButtonTweet
