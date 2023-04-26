// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, TopScore, isGameOn} = props

  return (
    <nav className="navbar">
      <div className="emoji">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>

      {isGameOn && (
        <div className="details">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {TopScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
