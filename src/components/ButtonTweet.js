import React from 'react'
import './stylesTweet.scss'

const ButtonTweet = ({ quote, author }) => {
  const href = 'https://twitter.com/intent/tweet?text=' + `${quote} ~ ${author}`
  return (
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
  )
}

export default ButtonTweet
