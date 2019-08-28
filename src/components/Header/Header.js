import React from 'react';

const Header = () => {
  return (
    <div className="pa3 pt5 bg-black-70 flex items-center justify-start">
      <div className="dib ma2 pa0 w-auto">
        <img src="https://lastfm-img2.akamaized.net/i/u/174s/eec4f9841f4790b63f2b5480b83f8a86.png" alt="User avatar" className="br-100 mw4 mw3-m"/>
      </div>
      <h1 className="white pa3 f2 f3-m">Welcome, <a href="https://www.last.fm/user/ej_sim" className="white no-underline b pointer">ej_sim</a>...</h1>
    </div>
  );
}

export default Header;