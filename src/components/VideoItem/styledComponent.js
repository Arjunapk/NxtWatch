import styled from 'styled-components'

export const VideoItemCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 45%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const VideoItemCardImage = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
`

export const VideoItemContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 0 0 0;
`

export const VideoItemChannelLogo = styled.img`
  width: 30px;
  height: 30px;
`

export const VideoItemText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`

export const VideoItemTitle = styled.h5`
  font-size: 12px;
  font-family: Roboto;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  margin: 0 0 5px 0;
`

export const VideoItemChannelName = styled.p`
  font-size: 10px;
  font-family: Roboto;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  margin: 0 0 5px 0;
`

export const VideoItemViewsAndDate = styled.p`
  font-size: 10px;
  font-family: Roboto;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
`
