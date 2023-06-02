import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiTwotoneFire} from 'react-icons/ai'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import ActiveThemeContext from '../../context/ActiveThemeContext'
import {
  LoaderCard,
  TrendingPage,
  TrendingPageContent,
  TrendingPageCard,
  TrendingPageHeader,
  TrendingIconCard,
  TrendingPageHeading,
  SearchResultsListCard,
} from './styledComponent'

const apiConstants = {
  initial: 'INITIAL',
  process: 'PROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {
    searchResults: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount = () => {
    this.getSearchResults()
  }

  onSuccessApi = videosList => {
    this.setState({apiStatus: apiConstants.success, searchResults: videosList})
  }

  onFailureApi = () => {
    this.setState({apiStatus: apiConstants.failure})
  }

  getSearchResults = async () => {
    this.setState({apiStatus: apiConstants.process})
    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.videos.map(eachVideo => ({
      channel: {
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      },
      id: eachVideo.id,
      publishedAt: eachVideo.published_at,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))

    if (response.ok === true) {
      this.onSuccessApi(updatedData)
    } else {
      this.onFailureApi()
    }
  }

  renderLoadingView = () => (
    <LoaderCard data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderCard>
  )

  renderSuccessView = isDark => {
    const {searchResults} = this.state

    return (
      <TrendingPageCard>
        <TrendingPageHeader isDark={isDark}>
          <TrendingIconCard isDark={isDark}>
            <AiTwotoneFire size={20} color="red" />
          </TrendingIconCard>
          <TrendingPageHeading isDark={isDark}>Trending</TrendingPageHeading>
        </TrendingPageHeader>
        <SearchResultsListCard>
          {searchResults.map(eachItem => (
            <VideoItem key={eachItem.id} videoDetails={eachItem} />
          ))}
        </SearchResultsListCard>
      </TrendingPageCard>
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
            <TrendingPage>
              <Header />
              <TrendingPageContent>
                <SideBar
                  isDark={isDark}
                  activeTab={activeTab}
                  changeActiveTab={changeActiveTab}
                  tabsList={tabsList}
                />
                {this.renderSpecifiedView(isDark)}
              </TrendingPageContent>
            </TrendingPage>
          )
        }}
      </ActiveThemeContext.Consumer>
    )
  }
}

export default TrendingRoute
