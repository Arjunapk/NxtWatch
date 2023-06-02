import styled from 'styled-components'

export const LoaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`
export const GamePage = styled.div`
  display: flex;
  flex-direction: column;
`

export const GamePageContent = styled.div`
  display: flex;
  margin: 15px 0;
  height: 90vh;
`
export const GamePageCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const GamePageHeader = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background-color: ${prop => (prop.isDark ? '#181818' : '#f8fafc')};
`

export const GameIconCard = styled.div`
  padding: 10px 12px;
  border-radius: 50%;
  background-color: ${prop => (prop.isDark ? '#000000' : '#f1f5f9')};
`

export const GamePageHeading = styled.h3`
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
  color: ${prop => (prop.isDark ? '#ffffff' : '#181818')};
  margin: 0 20px;
`

export const SearchResultsListCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 10px 0;
  overflow: auto;
`
