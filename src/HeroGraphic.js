import React, { Component } from 'react';
import './HeroGraphic.css';

class HeroGraphic extends Component {

  render() {
    return (
      <div className="universe">
        <div className="universe__part">
          <div className="universe__bubble"></div>
          <div className="universe__bubble"></div>
          <div className="universe__bubble"></div>
          <div className="universe__bubble"></div>
          <div className="universe__bubble"></div>
          <div className="universe__bubble"></div>
          <div className="universe__planet"></div>
          <div className="universe__hills"></div>
          <div className="universe__rocket">
          <div className="universe__rocket-window"></div>
          <div className="universe__rocket-light"></div>
        </div>

        <div className="universe__satellite1"></div>
        <div className="universe__satellite2"></div>
      </div>
    </div>
    );
  }
}

export default HeroGraphic;
