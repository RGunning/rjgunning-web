import React, { Component } from 'react';
import './Home.scss';
import SocialIcons from '../components/layout/SocialIcons';

class Home extends Component {
  render() {
    return (
      <div className="section container">
        <div className="row">
          <div className="col s12 white-text center-align">
            <img className="circle responsive-img" alt="Richard Sahrakorpi" src="img/picture-rg12.jpg" />
            <h1 className="title">Richard Sahrakorpi</h1>
            <h2 className="subtitle">Front-End Programmer</h2>
            <SocialIcons />
          </div>
        </div>

      </div>
    )
  }
}

export default Home;
