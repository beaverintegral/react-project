import { useState } from 'react'
import Star from './Star'

const Rating = ({ rate = 0 }) => {
  const [userRating, setUserRating] = useState(rate)
  const [userHover, setUserHover] = useState(0)
  const [userSubmit, setUserSubmit] = useState(false)
  const [buttonText, setButtonText] = useState('Rate')

  return (
    <div className="rating-wrapper">
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          className={`rating-element ${
            index <= (userHover || userRating)
              ? 'rating-element__focused'
              : null
          }`}
          id={index}
          setRating={setUserRating}
          active={userRating}
          hover={userHover}
          setHover={setUserHover}
          submit={userSubmit}
        />
      ))}
      <button
        className={`${
          userSubmit
            ? 'rating-button rating-button__on'
            : 'rating-button rating-button__off'
        }`}
        onClick={() => {
          setUserSubmit(true)
          setButtonText('✓')
        }}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default Rating
