import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  height: 90vh;
`

export const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
  width: 80%;
`

export const VideoTextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const VideoTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  font-family: Roboto;
  margin: 0 0 10px 0;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
`

export const VideoViewsAndDate = styled.p`
  font-size: 12px;
  font-weight: 700;
  font-family: Roboto;
  margin: 10px 0;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
`

export const VideoButtonCard = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`

export const VideoButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75px;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
`

export const BreakLine = styled.hr`
  width: 100%;
  border-color: #231f20;
`

export const ProfileContainer = styled.div`
  display: flex;
  margin: 10px 0;
`
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`

export const ProfileName = styled.p`
  font-size: 16px;
  font-weight: 700;
  font-family: Roboto;
  margin: 0 0 10px 0;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
`

export const ProfileSubscriberCount = styled.p`
  font-size: 12px;
  font-weight: 700;
  font-family: Roboto;
  margin: 0;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
`

export const VideoDescription = styled.p`
  font-size: 12px;
  font-weight: 700;
  font-family: Roboto;
  margin: 0;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
`
export const LoaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`
