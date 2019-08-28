import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import OptionSelect from './components/OptionSelect/OptionSelect';
import Chart from './components/Chart/Chart';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';

const initialState = {
  route: 'home',
  isSignedIn: false
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        <Header />
      { route === 'home'
      ? <div className="main-content">
          <Description />
          <OptionSelect />
          <Chart />
        </div>
      : (
          (route === 'signin' || route === 'signout')
          ? <SignIn onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange} />
        )
      }
        <Footer />
      </div>
    );
  }
}

export default App;
