import React, { Component } from 'react';
import './Member.css';

class Member extends Component {
  avatarCharacters() {
    let name = this.props.name.match(/\b(\w)/g);
    return name[0] + name[1];
  }

  generateColorHSL() {
    return 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
  }

  render() {
    return (
      <div className="avatar" style={{backgroundColor: this.generateColorHSL()}}>
        {this.avatarCharacters()}
      </div>
    );
  }
}

export default Member;
