import {Component} from 'react'
import RegistrationForm from './components/RegistrationForm'
import './App.css'

class App extends Component {
  state = {
    first: '',
    second: '',
    islogged: false,
    isloggedfirst: false,
    isStatus: true,
  }

  oninputFirstText = event => {
    this.setState({first: event.target.value})
  }

  oninputSecondText = event => {
    this.setState({second: event.target.value})
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({isloggedfirst: true})
    } else {
      this.setState({isloggedfirst: false})
    }
  }

  onBlurSecondName = event => {
    if (event.target.value === '') {
      this.setState({islogged: true})
    } else {
      this.setState({islogged: false})
    }
  }

  onSubmitButton = event => {
    event.preventDefault()
    this.setState({isStatus: false})
    const {first, second} = this.state

    if (first === '' && second === '') {
      this.setState({islogged: true})
      this.setState({isloggedfirst: true})
    }

    this.setState({first: '', second: ''})
  }

  onButtonStatus = () => {
    this.setState({isStatus: true})
  }

  render() {
    const {first, second, islogged, isloggedfirst, isStatus} = this.state
    console.log(first, second, islogged)

    const classContainer = islogged ? 'color_msg' : null
    const classContainer1 = isloggedfirst ? 'color_msg' : null
    return (
      <>
        <div className="text-center-message">
          <h1>Registration</h1>
          {isStatus ? (
            <form onSubmit={this.onSubmitButton}>
              <div className="bg-shadow-box">
                <label htmlFor="first_name">FIRST NAME</label>
                <input
                  className={classContainer1}
                  id="first_name"
                  value={first}
                  placeholder="First name"
                  onChange={this.oninputFirstText}
                  onBlur={this.onBlurFirstName}
                />
                {console.log(isloggedfirst)}
                {isloggedfirst ? <p>Required</p> : ''}
                <label htmlFor="second_name" className="label-msg">
                  LAST NAME
                </label>
                <input
                  className={classContainer}
                  id="second_name"
                  value={second}
                  placeholder="Second name"
                  onChange={this.oninputSecondText}
                  onBlur={this.onBlurSecondName}
                />
                {console.log(islogged)}
                {islogged ? <p>Required</p> : ''}
                <br />
                <button type="submit">Submit</button>
              </div>
            </form>
          ) : (
            <RegistrationForm onButtonStatus={this.onButtonStatus} />
          )}
        </div>
      </>
    )
  }
}

export default App
