import React from 'react';
import './App.css';

import Gradient from './components/Gradient/Gradient.js'
import Input from './components/Input/Input.js'
import Button from './components/Button/Button.js'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      usernameValid: false,
      passwordValid: false,
      buttonDisable: true,
      errorUsername: 'none',
      errorPassword: 'none'
    }
    this.handleUsernameValidatorCheck = this.handleUsernameValidatorCheck.bind(this);
    this.handlePasswordValidatorCheck = this.handlePasswordValidatorCheck.bind(this)

  }
  buttonCheck() {
    
  }
  handleUsernameValidatorCheck(e) {
    if(e.target.value.trim().length < 5){
       this.setState(state => ({
        usernameValid: false,
        errorUsername: 'block'
      }))
    }
    else {
      this.setState(state => ({
        usernameValid: true,
        errorUsername: 'none'
      }))
    }

    if(this.state.usernameValid && this.state.passwordValid){
      this.setState({buttonDisable: false})
    }
    else {
      this.setState({buttonDisable: true})
    }
  }
  handlePasswordValidatorCheck(e) {
    if(e.target.value.trim().length < 5){
      this.setState(state => ({
        passwordValid: false,
        errorPassword: 'block'
      }))
    }
    else {
      this.setState(state => ({
        passwordValid: true,
        errorPassword: 'none'
      }))
    }

    if(this.state.usernameValid && this.state.passwordValid){
      this.setState({buttonDisable: false})
      console.log(1)
    }
    else {
      this.setState({buttonDisable: true})
    }
  }
  render() {
    return (
      <div className="login-container">
        <Gradient />
        <p className="login-text">Login</p>
        
        <Input placeholder="Username" onchange={this.handleUsernameValidatorCheck} message="Login should contain at least 5 chars." display={{display: this.state.errorUsername}}/>
        <Input placeholder="Password" onchange={this.handlePasswordValidatorCheck} message="Password should contain at least 5 chars" display={{display: this.state.errorPassword}}/>
        <Button value="Sign In!" disabled={this.state.buttonDisable} />

        <div className="link-container">
          <a href="#!">Dont have an accaunt? Register</a>
        </div>
      </div>
    );
  }
  
}

export default App;
