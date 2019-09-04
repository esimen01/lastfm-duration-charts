import React from 'react';

class OptionSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: 'tracks',
      chartRange: '1month',
      chartItems: 10
    };
  }
  onTypeChange = (event) => {
    this.setState({chartType: event.target.value});
  }
  onRangeChange = (event) => {
    this.setState({chartRange: event.target.value});
  }
  onItemsChange = (event) => {
    this.setState({chartItems: event.target.value});
  }
  render() {
    return (
      <div className="ma3">
        <div className="flex w-100">
          <div className="w-third pa3 flex">
            <label className="flex items-center nowrap ma2">Chart type: </label>
            <select value={this.state.value} onChange={this.onTypeChange} className="w-100 f6 h2 bg-white ma1 b--black-20 ">
              <option>Artists</option>
              <option>Albums</option>
              <option>Tracks</option>
            </select>
          </div>
          <div className="w-third pa3 flex">
            <label className="flex items-center nowrap ma2">Date range: </label>
            <select value={this.state.value} onChange={this.onRangeChange} className="w-100 f6 h2 bg-white ma1 b--black-20 ">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 180 days</option>
              <option>Last 365 days</option>
              <option>All time</option>
            </select>
          </div>
          <div className="w-third pa3 flex">
            <label className="flex items-center nowrap ma2">Number of items: </label>
            <select value={this.state.value} onChange={this.onItemsChange} className="w-100 f6 h2 bg-white ma1 b--black-20 ">
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
            </select>
          </div>
        </div>
        <div className="dib center">
          <a className="f5 link dim br3 pa3 mb3 dib white bg-last-red" href="#0" onClick={() => this.props.onRouteChange('loading')}>Show chart</a>
        </div>
      </div>
    );
  }
}

export default OptionSelect;