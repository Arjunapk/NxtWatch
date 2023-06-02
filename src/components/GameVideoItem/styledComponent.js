import styled from 'styled-components'

export const GameVideoItemCard = styled.div`
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

export const GameVideoItemCardImage = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
`

export const GameVideoItemText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`

export const GameVideoItemTitle = styled.p`
  font-size: 12px;
  font-family: Roboto;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  margin: 0 0 5px 0;
`

export const GameVideoItemViewCount = styled.p`
  font-size: 10px;
  font-family: Roboto;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  margin: 0 0 5px 0;
`
