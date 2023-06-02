import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ActiveThemeContext from '../../context/ActiveThemeContext'
import {
  VideoItemCard,
  VideoItemCardImage,
  VideoItemContent,
  VideoItemChannelLogo,
  VideoItemText,
  VideoItemTitle,
  VideoItemChannelName,
  VideoItemViewsAndDate,
} from './styledComponent'

const VideoItem = prop => {
  const {videoDetails} = prop
  const {
    channel,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails
  const {name, profileImageUrl} = channel
  const uploadTime = formatDistanceToNow(new Date(publishedAt))

  return (
    <ActiveThemeContext.Consumer>
      {value => {
        const {activeTheme} = value
        const isDark = activeTheme === 'Dark'

        return (
          <VideoItemCard>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <VideoItemCardImage src={thumbnailUrl} alt="thumbnail" />
              <VideoItemContent>
                <VideoItemChannelLogo src={profileImageUrl} alt={name} />
                <VideoItemText>
                  <VideoItemTitle isDark={isDark}>{title}</VideoItemTitle>
                  <VideoItemChannelName isDark={isDark}>
                    {name}
                  </VideoItemChannelName>
                  <VideoItemViewsAndDate
                    isDark={isDark}
                  >{`${viewCount} views . ${uploadTime}`}</VideoItemViewsAndDate>
                </VideoItemText>
              </VideoItemContent>
            </Link>
          </VideoItemCard>
        )
      }}
    </ActiveThemeContext.Consumer>
  )
}

export default VideoItem
