import {Link} from 'react'
import ActiveThemeContext from '../../context/ActiveThemeContext'
import {
  GameVideoItemCard,
  GameVideoItemCardImage,
  GameVideoItemText,
  GameVideoItemTitle,
  GameVideoItemViewCount,
} from './styledComponent'

const GameVideoItem = prop => {
  const {videoDetails} = prop
  const {id, thumbnailUrl, title, viewCount} = videoDetails

  return (
    <ActiveThemeContext.Consumer>
      {value => {
        const {activeTheme} = value
        const isDark = activeTheme === 'Dark'

        return (
          <GameVideoItemCard>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <GameVideoItemCardImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <GameVideoItemText>
                <GameVideoItemTitle isDark={isDark}>{title}</GameVideoItemTitle>
                <GameVideoItemViewCount isDark={isDark}>
                  {viewCount} watching world wide
                </GameVideoItemViewCount>
              </GameVideoItemText>
            </Link>
          </GameVideoItemCard>
        )
      }}
    </ActiveThemeContext.Consumer>
  )
}

export default GameVideoItem
