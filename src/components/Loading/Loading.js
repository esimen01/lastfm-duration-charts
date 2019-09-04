import React from 'react';
import './Loading.css';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      totalPages: "calculating..."
    }
  }
  doSetTimeout = (i) => {
    setTimeout(() => {
      this.setState({currentPage: i + 1});
      fetch(`http://localhost:3000/data/ej_sim/1month/${i + 1}`, {

      })
    }, i * 1000);
  }
  loop = async (n) => {
    try {
      for (let i = this.state.currentPage; i < n; i++) {
        await this.doSetTimeout(i);
      }
      await setTimeout(() => {
        this.props.onRouteChange('home');
      }, this.state.totalPages * 1000);
    }
    catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/ej_sim/1month/pagecount')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({totalPages: data.pages});
      this.loop(this.state.totalPages)
    })
  }
  render() {
    return (
      <div className="tl ma3 pa3 bg-white-70 tl dib w-100">
        <h2 className="ma3 pa0 last-gray tc">Loading your data: page {this.state.currentPage} of {this.state.totalPages}</h2>
        <br />
        <div className="lds-dual-ring ma3 center"></div>
      </div>
    );
  }
}

export default Loading;