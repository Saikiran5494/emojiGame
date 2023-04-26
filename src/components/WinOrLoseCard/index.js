// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain, isWon} = props

  const img = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const text = isWon ? 'You Won' : 'You Lose'
  const result = isWon ? 'Best Score' : 'Score'

  const playButtonClicked = () => {
    playAgain()
  }

  return (
    <div className="image-container">
      <img src={img} alt="Win or Lose" className="image" />
      <div className="score-card">
        <h1>{text}</h1>
        <p className="score-text">{result}</p>
        <p className="score-num">{score}/12</p>
        <button
          className="play-button"
          type="button"
          onClick={playButtonClicked}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
