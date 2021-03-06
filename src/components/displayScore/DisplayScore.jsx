import React from 'react'
import './DisplayScore.scss'
import FadeIn from 'react-fade-in';

function DisplayScore(props) {
  const scoreText = [
    'Dumb all over',
    "Jesus Thinks You're A Jerk",
    "Dancin' fool",
    'Cosmik Debris',
    "Shut up 'n play your guitar",
    'The Meek Shall Inherit Nothing',
    "Tryin' To Grow A Chin",
    'Rudy Wants To Buy Yez A Drink',
    'Wowie Zowie',
    'Wild love',
    'The man from Utopia!',
  ]

  const scoreComment = () => {
    return scoreText[props.totalScore()]
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <FadeIn>
      <div className='card-container card-container__score'> 
        <div className="card card__score">
          <p style={{ margin: "auto 0 auto auto" }}>You scored</p> 
          <div className="number fadeIn">{ props.totalScore()}</div> 
          <p style={{ margin: "auto auto auto 0"  }}>out of {props.qAmount}</p>
        </div>
        <div className="card card__score--comment fadeIn">{scoreComment()}</div>
        <div className="card card__try-again" onClick={refreshPage}>Try again?</div>      
      </div>
    </FadeIn>
  )
}

export default DisplayScore
