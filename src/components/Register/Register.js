import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }
  onSubmitRegister = () => {
    this.props.onRouteChange('home');
  }
  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="center bg-white-70 ma3 pa4 w-50">
        <div className="center">
          <h2>Register</h2><hr />
          <div className="mv3">
            <label htmlFor="inputEmail3" className="fw7 f6">Email</label>
            <input type="email" className="db w-100 pa2 mt2 br2 b--black-20 ba f6" id="inputEmail3" placeholder="Email" onChange={this.onEmailChange} />
          </div>
          <div className="mv3">
            <label htmlFor="inputPassword3" className="fw7 f6">Password</label>
            <input type="password" className="db w-100 pa2 mt2 br2 b--black-20 ba f6" id="inputPassword3" placeholder="Password" onChange={this.onPasswordChange} />
          </div>
          <div className="mv3">
            <label htmlFor="inputPassword3" className="fw7 f6">Last.fm account</label>
            <input type="text" className="db w-100 pa2 mt2 br2 b--black-20 ba f6" id="inputPassword3" placeholder="Username" />
          </div>
          <div className="form-group">
              <button onClick={this.onSubmitRegister} type="submit" className="pointer br2 ba b--black-20 bg-white pa2 mv3 bg-animate hover-bg-light-gray f6">Sign in</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;