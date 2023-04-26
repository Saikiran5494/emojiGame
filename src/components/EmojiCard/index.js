// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojis, emojiClicked} = props
  const {emojiName, emojiUrl, id} = emojis

  const emojiIconClicked = () => {
    emojiClicked(id)
  }

  return (
    <li>
      <button type="button" className="emoji-button" onClick={emojiIconClicked}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
