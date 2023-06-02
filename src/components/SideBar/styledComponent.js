import styled from 'styled-components'

export const HomeContainerLg = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  width: 20%;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const NavigationContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 0;
  list-style: none;
`

export const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
`

export const NavigationLink = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  font-weight: 500;
  margin: 0;
  padding: 0 10px;
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const ContactUsHeading = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  font-weight: 500;
  margin: 0;
`

export const ContactUsLogoCard = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`

export const ContactUsLogo = styled.img`
  width: 30px;
  margin: 0 10px 0 0;
`

export const ContactUsDescription = styled.p`
  width: 200px;
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  margin: 0;
`
