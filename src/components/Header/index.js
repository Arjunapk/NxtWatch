import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import ActiveThemeContext from '../../context/ActiveThemeContext'
import {
  HeaderContainerSm,
  WebsiteLogo,
  NavLinksCard,
  NavLinkItem,
  NavLinkButton,
  MenuBarListCard,
  MenuBarListItem,
  MenuCloseButton,
  HeaderContainerLg,
  ProfileImage,
  NavLinkLogoutButton,
} from './styledComponent'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ActiveThemeContext.Consumer>
      {value => {
        const {
          activeTheme,
          changeTheme,
          activeTab,
          changeActiveTab,
          tabsList,
        } = value
        const isDark = activeTheme === 'Dark'
        const iconColor = isDark ? 'white' : 'black'
        const websiteLogo = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const activeThemeIcon = isDark ? (
          <FiSun color={iconColor} size={20} />
        ) : (
          <FaMoon color={iconColor} size={20} />
        )

        const changeActiveTheme = () => {
          changeTheme()
        }

        const onClickNavigation = activeId => {
          changeActiveTab(activeId)
        }

        return (
          <>
            <HeaderContainerSm>
              <Link to="/">
                <WebsiteLogo src={websiteLogo} alt="website logo" />
              </Link>
              <NavLinksCard>
                <NavLinkItem>
                  <NavLinkButton
                    type="button"
                    data-testid="theme"
                    onClick={changeActiveTheme}
                  >
                    {activeThemeIcon}
                  </NavLinkButton>
                </NavLinkItem>
                <NavLinkItem>
                  <Popup
                    modal
                    trigger={
                      <NavLinkButton>
                        <GiHamburgerMenu color={iconColor} size={20} />
                      </NavLinkButton>
                    }
                  >
                    {close => (
                      <>
                        <MenuBarListCard>
                          <MenuCloseButton
                            type="button"
                            onClick={() => close()}
                          >
                            <IoMdClose size={20} />
                          </MenuCloseButton>

                          {tabsList.map(each => {
                            const onClickLink = () => {
                              onClickNavigation(each.id)
                            }
                            const myStyle =
                              activeTab === each.id
                                ? {
                                    color: '#1e293b',
                                    padding: '10px 20px',
                                    'text-decoration': 'none',
                                    'background-color': 'yellow',
                                  }
                                : {color: '#1e293b', 'text-decoration': 'none'}

                            return (
                              <MenuBarListItem key={each.id}>
                                <Link
                                  to={each.path}
                                  style={myStyle}
                                  onClick={onClickLink}
                                >
                                  {each.displayText}
                                </Link>
                              </MenuBarListItem>
                            )
                          })}
                        </MenuBarListCard>
                      </>
                    )}
                  </Popup>
                </NavLinkItem>
                <NavLinkItem>
                  <NavLinkButton type="button" onClick={onClickLogout}>
                    <FiLogOut color={iconColor} size={20} />
                  </NavLinkButton>
                </NavLinkItem>
              </NavLinksCard>
            </HeaderContainerSm>
            <HeaderContainerLg>
              <WebsiteLogo src={websiteLogo} alt="website logo" />
              <NavLinksCard>
                <NavLinkItem>
                  <NavLinkButton
                    color={iconColor}
                    type="button"
                    onClick={changeActiveTheme}
                  >
                    {activeThemeIcon}
                  </NavLinkButton>
                </NavLinkItem>
                <NavLinkItem>
                  <NavLinkButton type="button">
                    <ProfileImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                      alt="profile"
                    />
                  </NavLinkButton>
                </NavLinkItem>
                <NavLinkItem>
                  <NavLinkLogoutButton
                    type="button"
                    isDark={isDark}
                    onClick={onClickLogout}
                  >
                    Logouts
                  </NavLinkLogoutButton>
                </NavLinkItem>
              </NavLinksCard>
            </HeaderContainerLg>
          </>
        )
      }}
    </ActiveThemeContext.Consumer>
  )
}

export default withRouter(Header)
