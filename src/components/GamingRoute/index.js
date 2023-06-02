import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBar from '../SideBar'
import GameVideoItem from '../GameVideoItem'
import ActiveThemeContext from '../../context/ActiveThemeContext'
import {
  LoaderCard,
  GamePage,
  GamePageContent,
  SearchResultsListCard,
  GamePageCard,
  GamePageHeader,
  GameIconCard,
  GamePageHeading,
} from './styledComponent'

const apiConstants = {
  initial: 'INITIAL',
  process: 'PROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
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

    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.videos.map(eachVideo => ({
      id: eachVideo.id,
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
    <LoaderCard>
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderCard>
  )

  renderSuccessView = isDark => {
    const {searchResults} = this.state

    return (
      <GamePageCard>
        <GamePageHeader isDark={isDark}>
          <GameIconCard isDark={isDark}>
            <SiYoutubegaming size={40} color="red" />
          </GameIconCard>
          <GamePageHeading isDark={isDark}>Gaming</GamePageHeading>
        </GamePageHeader>
        <SearchResultsListCard>
          {searchResults.map(eachItem => (
            <GameVideoItem key={eachItem.id} videoDetails={eachItem} />
          ))}
        </SearchResultsListCard>
      </GamePageCard>
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
            <GamePage>
              <Header />
              <GamePageContent>
                <SideBar
                  isDark={isDark}
                  activeTab={activeTab}
                  changeActiveTab={changeActiveTab}
                  tabsList={tabsList}
                />
                {this.renderSpecifiedView(isDark)}
              </GamePageContent>
            </GamePage>
          )
        }}
      </ActiveThemeContext.Consumer>
    )
  }
}

export default GamingRoute
