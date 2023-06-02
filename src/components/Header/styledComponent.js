import styled from 'styled-components'

export const HeaderContainerSm = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  @media screen and (min-width: 768px) {
    display: none;
    padding: 20px 30px;
  }
`

export const WebsiteLogo = styled.img`
  width: 100px;
  @media screen and (win-width: 768px) {
    width: 150px;
  }
`
export const NavLinksCard = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const NavLinkItem = styled.li`
  margin: 0 5px;
  @media screen and (min-width: 768px) {
    margin: 0 10px;
  }
`

export const NavLinkButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
`
export const MenuBarListCard = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 100px;
  margin: 0;
  width: 100%;
  background-color: grey;
`

export const MenuBarListItem = styled.li`
  margin: 20px 0;
  font-size: 20px;
  font-weight: normal;
  color: #1e293b;
  font-family: Roboto;
  text-align: center;
`
export const MenuCloseButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  align-self: flex-end;
  padding: 0 0 50px;
  color: black;
`
export const HeaderContainerLg = styled.header`
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
`
export const NavLinkLogoutButton = styled.button`
  border: 1px solid;
  border-color: ${prop => (prop.isDark ? 'white' : 'blue')};
  background-color: transparent;
  color: ${prop => (prop.isDark ? 'white' : 'blue')};
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  font-family: Roboto;
  margin: 0 0 5px 0;
  padding: 5px 10px;
`
