import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginCard,
  WebsiteLogo,
  LabelName,
  UserInput,
  ShowPasswordCard,
  ShowPasswordCheckbox,
  ShowPasswordName,
  LoginButton,
  ErrorMsg,
} from './styledComponent'
import ActiveThemeContext from '../../context/ActiveThemeContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMSg: false,
    errorMsg: '',
    isPasswordShow: 'password',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = event => {
    if (event.target.checked === true) {
      this.setState({isPasswordShow: 'text'})
    } else {
      this.setState({isPasswordShow: 'password'})
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMSg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showErrorMSg,
      errorMsg,
      isPasswordShow,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ActiveThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          const isDark = activeTheme === 'Dark'
          const websiteLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginCard isDark={isDark} onSubmit={this.onSubmitForm}>
              <WebsiteLogo src={websiteLogo} alt="website logo" />
              <LabelName isDark={isDark} htmlFor="username">
                USERNAME
              </LabelName>
              <UserInput
                isDark={isDark}
                id="username"
                type="text"
                value={username}
                onChange={this.onChangeUsername}
                placeholder="Username"
              />
              <LabelName isDark={isDark} htmlFor="password">
                PASSWORD
              </LabelName>
              <UserInput
                isDark={isDark}
                id="password"
                type={isPasswordShow}
                value={password}
                onChange={this.onChangePassword}
                placeholder="Password"
              />
              <ShowPasswordCard>
                <ShowPasswordCheckbox
                  type="checkbox"
                  onChange={this.onChangeCheckbox}
                  id="showPasswordCheckbox"
                />
                <ShowPasswordName
                  isDark={isDark}
                  htmlFor="showPasswordCheckbox"
                >
                  Show Password
                </ShowPasswordName>
              </ShowPasswordCard>
              <LoginButton type="submit">Login</LoginButton>
              {showErrorMSg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
            </LoginCard>
          )
        }}
      </ActiveThemeContext.Consumer>
    )
  }
}

export default Login
