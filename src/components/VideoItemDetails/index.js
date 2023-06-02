import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import ActiveThemeContext from '../../context/ActiveThemeContext'
import {
  VideoItemDetailsContainer,
  VideoCard,
  VideoTextContent,
  VideoTitle,
  VideoViewsAndDate,
  VideoButtonCard,
  VideoButton,
  BreakLine,
  ProfileContainer,
  ProfileImage,
  ProfileDetails,
  ProfileName,
  ProfileSubscriberCount,
  VideoDescription,
  LoaderCard,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  process: 'PROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {videoDetails: {}, apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiConstants.process})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderCard>
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderCard>
  )

  renderSuccessView = isDark => {
    const {videoDetails} = this.state
    const {
      channel,
      description,
      id,
      title,
      publishedAt,
      thumbnailUrl,
      viewCount,
      videoUrl,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const uploadTime = formatDistanceToNow(new Date(publishedAt))
    const iconColor = isDark ? '#ffffff' : '#231f20'

    return (
      <VideoCard>
        <ReactPlayer
          url={videoUrl}
          light={thumbnailUrl}
          height="50vh"
          width="100%"
        />
        <VideoTextContent>
          <VideoTitle isDark={isDark}>{title}</VideoTitle>
          <VideoViewsAndDate isDark={isDark}>
            {viewCount} views . {uploadTime}
          </VideoViewsAndDate>
          <VideoButtonCard>
            <VideoButton type="button" isDark={isDark}>
              <BiLike size={15} color={iconColor} />
              Like
            </VideoButton>
            <VideoButton type="button" isDark={isDark}>
              <BiDislike size={15} color={iconColor} />
              DisLike
            </VideoButton>
            <VideoButton type="button" isDark={isDark}>
              <MdPlaylistAdd size={15} color={iconColor} />
              Save
            </VideoButton>
          </VideoButtonCard>
          <BreakLine />
          <ProfileContainer>
            <ProfileImage src={profileImageUrl} alt="profile" />
            <ProfileDetails>
              <ProfileName isDark={isDark}>{name}</ProfileName>
              <ProfileSubscriberCount isDark={isDark}>
                {subscriberCount} subscribers
              </ProfileSubscriberCount>
            </ProfileDetails>
          </ProfileContainer>
          <VideoDescription isDark={isDark}>{description}</VideoDescription>
        </VideoTextContent>
      </VideoCard>
    )
  }

  renderFailureView = () => <h1>Failure</h1>

  renderSpecifiedView = isDark => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.process:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.renderSuccessView(isDark)
      case apiConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <ActiveThemeContext.Consumer>
        {value => {
          const {activeTheme, activeTab, changeActiveTab, tabsList} = value
          const isDark = activeTheme === 'Dark'

          return (
            <>
              <Header />
              <VideoItemDetailsContainer>
                <SideBar
                  isDark={isDark}
                  activeTab={activeTab}
                  changeActiveTab={changeActiveTab}
                  tabsList={tabsList}
                />
                {this.renderSpecifiedView(isDark)}
              </VideoItemDetailsContainer>
            </>
          )
        }}
      </ActiveThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
