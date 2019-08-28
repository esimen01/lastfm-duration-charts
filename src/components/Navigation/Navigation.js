import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (!isSignedIn) {
    return (
      <nav className="ma0 ph3 bg-black overflow-hidden white fixed top-0 w-100 z-1">
        <div className="fl ma0 pa1">
          <ul className="list ma2 pa0 dib bg-last-red">
            <li className="dib pa1 ma0 b pointer">Last.fm Duration Charts</li>
          </ul>
        </div>
        <div className="fr ma0 pa1">
          <ul className="list ma0 pa0">
            <li onClick={() => onRouteChange('signin')} className="dib pa2 ma1 pointer">Sign In</li>
            <li onClick={() => onRouteChange('register')} className="dib pa2 ma1 pointer">Register</li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="ma0 ph3 bg-black overflow-hidden white fixed top-0 w-100 z-1">
        <div className="fl ma0 pa1">
          <ul className="list ma2 pa0 dib bg-last-red">
            <li className="dib pa1 ma0 b pointer">Last.fm Duration Charts</li>
          </ul>
        </div>
        <div className="fr ma0 pa1">
          <ul className="list ma0 pa0">
            <li onClick={() => onRouteChange('signout')} className="dib pa2 ma1 pointer">Sign Out</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;