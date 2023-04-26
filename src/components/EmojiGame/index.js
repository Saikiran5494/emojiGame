import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



*/

// Write your code here.
class EmojiGame extends Component {
  state = {emojisIds: [], TopScore: 0, isGameOn: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  stopGameSetScore = playedScore => {
    const {TopScore} = this.state
    let exitsScore = TopScore

    if (playedScore > exitsScore) {
      exitsScore = playedScore
    }
    this.setState({TopScore: exitsScore, isGameOn: false})
  }

  emojiClicked = id => {
    const {emojisIds} = this.state
    const {emojisList} = this.props
    const checkingIds = emojisIds.includes(id)

    if (checkingIds) {
      this.stopGameSetScore(emojisIds.length)
    } else {
      if (emojisList.length - 1 === emojisIds.length) {
        this.stopGameSetScore(emojisList.length)
      }
      this.setState(prevState => ({emojisIds: [...prevState.emojisIds, id]}))
    }
  }

  renderScoreCard = () => {
    const {emojisIds} = this.state
    const {emojisList} = this.props
    const isWon = emojisList.length === emojisIds.length

    return (
      <ul className="emojis-container">
        <WinOrLoseCard
          score={emojisIds.length}
          playAgain={this.playAgain}
          isWon={isWon}
        />
      </ul>
    )
  }

  renderEmojiCard = () => {
    const emojis = this.shuffledEmojisList()

    return (
      <ul className="emojis-container">
        {emojis.map(eachEmoji => (
          <EmojiCard
            emojis={eachEmoji}
            key={eachEmoji.id}
            emojiClicked={this.emojiClicked}
          />
        ))}
      </ul>
    )
  }

  playAgain = () => {
    this.setState({emojisIds: [], isGameOn: true})
  }

  render() {
    const {emojisIds, TopScore, isGameOn} = this.state

    return (
      <div className="bg-container">
        <NavBar
          TopScore={TopScore}
          score={emojisIds.length}
          isGameOn={isGameOn}
        />
        {isGameOn ? this.renderEmojiCard() : this.renderScoreCard()}
      </div>
    )
  }
}

export default EmojiGame
