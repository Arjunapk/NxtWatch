import {Link} from 'react-router-dom'
import {AiFillHome, AiTwotoneFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  HomeContainerLg,
  NavigationContainer,
  NavigationItem,
  NavigationLink,
  ContactUsContainer,
  ContactUsHeading,
  ContactUsLogoCard,
  ContactUsLogo,
  ContactUsDescription,
} from './styledComponent'

const SideBar = props => {
  const {isDark, activeTab, changeActiveTab, tabsList} = props

  return (
    <HomeContainerLg>
      <NavigationContainer>
        {tabsList.map(each => {
          let color
          if (activeTab === each.id) {
            color = 'red'
          } else {
            color = isDark ? '#ffffff' : '#231f20'
          }
          let icon
          if (each.id === 'HOME') {
            icon = <AiFillHome size={20} color={color} />
          } else if (each.id === 'TRENDING') {
            icon = <AiTwotoneFire size={20} color={color} />
          } else if (each.id === 'GAMING') {
            icon = <SiYoutubegaming size={20} color={color} />
          } else if (each.id === 'SAVED_VIDEOS') {
            icon = <MdPlaylistAdd size={20} color={color} />
          }

          const onClickLink = () => {
            changeActiveTab(each.id)
          }

          return (
            <NavigationItem key={each.id}>
              <Link
                to={each.path}
                style={{textDecoration: 'none', display: 'flex'}}
                onClick={onClickLink}
              >
                {icon}
                <NavigationLink isDark={isDark}>
                  {each.displayText}
                </NavigationLink>
              </Link>
            </NavigationItem>
          )
        })}
      </NavigationContainer>
      <ContactUsContainer>
        <ContactUsHeading isDark={isDark}>CONTACT US</ContactUsHeading>
        <ContactUsLogoCard>
          <ContactUsLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <ContactUsLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <ContactUsLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </ContactUsLogoCard>
        <ContactUsDescription isDark={isDark}>
          Enjoy! Now to see your channels and recommendations!
        </ContactUsDescription>
      </ContactUsContainer>
    </HomeContainerLg>
  )
}

export default SideBar
