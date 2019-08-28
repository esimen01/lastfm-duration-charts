import React from 'react';

const OptionSelect = () => {
  return (
    <div className="flex ma3">
      <div className="w-50 pl3 pr3 flex">
        <label className="flex items-center nowrap ma2">Chart type: </label>
        <select className="w-100 f6 h2 bg-white ma1 b--black-20 ">
          <option>Artists</option>
          <option>Albums</option>
          <option>Tracks</option>
        </select>
      </div>
      <div className="w-50 pl3 pr3 flex">
        <label className="flex items-center nowrap ma2">Date range: </label>
        <select className="w-100 f6 h2 bg-white ma1 b--black-20 ">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last 180 days</option>
          <option>Last 365 days</option>
          <option>All time</option>
        </select>
      </div>
      <div className="w-50 pl3 pr3 flex">
        <label className="flex items-center nowrap ma2">Number of items: </label>
        <select className="w-100 f6 h2 bg-white ma1 b--black-20 ">
          <option>5</option>
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
        </select>
      </div>
    </div>
  );
}

export default OptionSelect;