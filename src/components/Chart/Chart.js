import React from 'react';
import humanizeDuration from 'humanize-duration';
import './Chart.css';

const Chart = () => {
  const data = {
    "tracks": [
        {
            "time": "8074",
            "count": "22",
            "artist": "Interpol",
            "image": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "name": "The New"
        },
        {
            "time": "6248",
            "count": "22",
            "artist": "Unwound",
            "image": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "name": "Scarlette"
        },
        {
            "time": "5166",
            "count": "21",
            "artist": "Unwound",
            "image": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "name": "We Invent You"
        },
        {
            "time": "11340",
            "count": "20",
            "artist": "Drive Like Jehu",
            "image": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "name": "Luau"
        },
        {
            "time": "5820",
            "count": "20",
            "artist": "Iceage",
            "image": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "name": "Forever"
        },
        {
            "time": "5720",
            "count": "20",
            "artist": "Life Without Buildings",
            "image": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "name": "The Leanover"
        },
        {
            "time": "14460",
            "count": "20",
            "artist": "Lowercase",
            "image": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "name": "You're A King"
        },
        {
            "time": "11780",
            "count": "20",
            "artist": "Red House Painters",
            "image": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "name": "Medicine Bottle"
        },
        {
            "time": "6020",
            "count": "20",
            "artist": "Unwound",
            "image": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "name": "Arboretum"
        },
        {
            "time": "6593",
            "count": "19",
            "artist": "Swirlies",
            "image": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "name": "In Harmony New Found Freedom"
        }
      ]
    };
  let rank = 0;
  const max = 14460;
  const cmp = (track1, track2) => {
    if (Number(track1.time) < Number(track2.time)) {
      return 1;
    }
    if (Number(track1.time) > Number(track2.time)) {
      return -1;
    }
    return 0;
  };
  const chart = data.tracks
  .sort(cmp)
  .map(track => {
    rank++;
    return (
      <tr key={rank.toString()}>
        <td className="trackrank"><p>{rank}</p></td>
        <td className="trackimage">
          <img src={track.image} alt={track.name} />
        </td>
        <td className="trackname"><p className="overflow">{track.name}</p></td>
        <td className="artistname"><p className="overflow">{track.artist}</p></td>
        <td className="scrobbles">
          <span className="amount" 
            style={{width: (((Number(track.time) / max).toFixed(4) * 100) + "%")}}>
          </span>
          <p className="overflow">{
            humanizeDuration(Number(track.time) * 1000)
          }</p>
        </td>
      </tr>
    );
  });
  return (
    <div className="ma3 pa4 bg-white-70">
      <h2 className="ma3">Top Tracks</h2>
      <div className="pa4 bg-white-70 w-80 center">
        <table className="center pa0 w-100 db">
          <thead className="hide">
            <tr>
              <th className="trackrank"><p>Rank</p></th>
              <th className="trackimage"><p>Image</p></th>
              <th className="trackname"><p>Track</p></th>
              <th className="artistname"><p>Artist</p></th>
              <td className="scrobbles">
                <span className="amount"><p>Duration</p></span>
              </td>
            </tr>
          </thead>
          <tbody>
            {chart}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Chart;