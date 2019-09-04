import React from 'react';

const Description = () => {
  return (
    <div className="tl ma3 pa3 bg-white-70 tl">
      <h2 className="ma1 last-gray">What is this?</h2><br />
      <p className="ma1 pa0 last-gray">This tool displays your <a className="last-gray no-underline b" href="https://www.last.fm/">Last.fm</a> charts in a more realistic way. Currently, the charts on Last.fm are based solely on track count: a two-minute track is given the same weighting as a twenty-minute track. While this is an easy way to give users a general sense of their listening habits, the margin of error can add up for tracks of extreme lengths.</p><br />
      <p className="ma1 pa0 last-gray">For example, let's consider the track count and lengths of two albums. <a className="last-gray no-underline b" href="https://www.last.fm/music/The+Beatles/Revolver">The Beatles - Revolver</a> has 14 tracks which total 35 minutes. This averages to just over two minutes per track. On the other hand, <a className="last-gray no-underline b" href="https://www.last.fm/music/Pink+Floyd/Animals">Pink Floyd - Animals</a> has only 5 tracks, yet the album is seven minutes longer, clocking in at 42 minutes. These tracks average to over eight minutes long. It makes sense for the tracks on Animals to be given more weight in your charts since they require more time to play. If you listen to each album once, it will show that you have 5 scrobbles of Animals and 14 scrobbles of Revolver—almost three times as many, even though Revolver is shorter!</p><br />
      <p className="ma1 pa0 last-gray">With this website, you can view all your charts adjusted for runtime rather than scrobble count. You can learn how many minutes you've spent listening to your favorite artists, or how many times you have to listen to one album to equate another. Personally, this is a feature that I've wanted for a while since many of my favorite albums/songs happen to be quite long.</p><br />
      <p className="ma1 pa0 last-gray">I can't assure that this will work perfectly. Last.fm is missing the durations of many tracks, and it takes a little while for them to add such information for new releases. Additionally, there might be some discrepancies due to different versions of tracks having different lengths, such as extended live performances. Either way, I hope this provides you with another way of learning about your listening habits.</p>
    </div>
  );
}

export default Description;