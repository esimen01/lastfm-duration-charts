import React from 'react';
import './Chart.css';

const Chart = () => {
  return (
    <div className="ma3 pa4 bg-white-70">
      <h2 className="ma3">Top Tracks</h2>
      <div className="pa4 bg-white-70 w-80 center">
        <table className="center pa0 w-100 db">
          <thead className="hide">
            <tr>
              <th className="rank">Rank</th>
              <th className="image">Image</th>
              <th className="track">Track</th>
              <th className="artist">Artist</th>
              <td className="scrobbles">
                <span className="amount"><p>Duration</p></span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="rank">1</td>
              <td className="image">Image</td>
              <td className="track">The New</td>
              <td className="artist">Interpol</td>
              <td className="scrobbles">
                <span className="amount" style={{width: "100%"}}><p>Duration</p></span>
              </td>
            </tr>
            <tr>
              <td className="rank">2</td>
              <td className="image">Image</td>
              <td className="track">Scarlette</td>
              <td className="artist">Unwound</td>
              <td className="scrobbles">
                <span className="amount" style={{width: "90%"}}><p>Duration</p></span>
              </td>
            </tr>
            <tr>
              <td className="rank">3</td>
              <td className="image">Image</td>
              <td className="track">We Invent You</td>
              <td className="artist">Unwound</td>
              <td className="scrobbles">
                <span className="amount" style={{width: "85%"}}><p>Duration</p></span>
              </td>
            </tr>
            <tr>
              <td className="rank">4</td>
              <td className="image">Image</td>
              <td className="track">Luau</td>
              <td className="artist">Drive Like Jehu</td>
              <td className="scrobbles">
                <span className="amount" style={{width: "80%"}}><p>Duration</p></span>
              </td>
            </tr>
            <tr>
              <td className="rank">5</td>
              <td className="image">Image</td>
              <td className="track">Forever</td>
              <td className="artist">Iceage</td>
              <td className="scrobbles">
                <span className="amount" style={{width: "75%"}}><p>Duration</p></span>
              </td>
            </tr>
            <tr>
              <td className="rank">6</td>
              <td className="image">Image</td>
              <td className="track">The Leanover</td>
              <td className="artist">Life Without Buildings</td>
              <td className="scrobbles">
                <span className="amount" style={{width: "60%"}}><p>Duration</p></span>
              </td>
            </tr>
            <tr>
              <td className="rank">7</td>
              <td className="image">Image</td>
              <td className="track">You're A King</td>
              <td className="artist">Lowercase</td>
              <td className="scrobbles">
                <span className="amount" style={{width: "50%"}}><p>Duration</p></span>
              </td>
            </tr>
            <tr>
              <td className="rank">8</td>
              <td className="image">Image</td>
              <td className="track">Medicine Bottle</td>
              <td className="artist">Red House Painters</td>
              <td className="scrobbles">
                <span className="amount" style={{width: "45%"}}><p>Duration</p></span>
              </td>
            </tr>
            <tr>
              <td className="rank">9</td>
              <td className="image">Image</td>
              <td className="track">In Harmony New Found Freedom</td>
              <td className="artist">Swirlies</td>
              <td className="scrobbles">
                <span className="amount" style={{width: "20%"}}><p>Duration</p></span>
              </td>
            </tr>
            <tr>
              <td className="rank">10</td>
              <td className="image">Image</td>
              <td className="track">Instrumental</td>
              <td className="artist">The Microphones</td>
              <td className="scrobbles">
                <span className="amount" style={{width: "5%"}}><p>Duration</p></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Chart;