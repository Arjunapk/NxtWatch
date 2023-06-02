import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${prop => (prop.isDark ? '#212121' : 'white')};
`

export default AppContainer
