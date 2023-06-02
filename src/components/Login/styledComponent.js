import styled from 'styled-components'

export const LoginCard = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 30px;
  margin: auto;
  border-radius: 10px;
  background-color: ${prop => (prop.isDark ? 'black' : 'white')};
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const WebsiteLogo = styled.img`
  align-self: center;
  width: 200px;
  margin: 0 0 40px 0;
`

export const LabelName = styled.label`
  font-family: Roboto;
  font-weight: bold;
  color: ${prop => (prop.isDark ? 'white' : '#616e7c')};
  font-size: 14px;
  margin: 0 0 10px 0;
`
export const UserInput = styled.input`
  font-family: Roboto;
  color: ${prop => (prop.isDark ? 'white' : '#616e7c')};
  background-color: ${prop => (prop.isDark ? 'black' : 'white')};
  font-size: 18px;
  outline: none;
  border: 1px solid #1e293b;
  border-radius: 5px;
  padding: 15px;
  margin: 0 0 25px 0;
`
export const ShowPasswordCard = styled.div`
  display: flex;
  align-items: center;
`

export const ShowPasswordCheckbox = styled.input`
  width: 20px;
  height: 20px;
`

export const ShowPasswordName = styled.label`
  font-family: Roboto;
  color: ${prop => (prop.isDark ? 'white' : '#616e7c')};
  font-size: 14px;
  margin: 0 10px;
`
export const LoginButton = styled.button`
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: #3b82f6;
  font-family: Roboto;
  font-weight: bold;
  color: #ffffff;
  font-size: 14px;
  margin: 20px 0;
`

export const ErrorMsg = styled.p`
  font-family: Roboto;
  color: #ff0000;
  font-size: 14px;
  margin: 10px 0;
`
