import React, { Component } from 'react';
import Logo from './Logo.js';
import Member from './Member.js';
import Weather from './Weather.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        { name: "Chandler Roth" },
        { name: "Brandon D'Adam" },
        { name: "Jared Rauh" },
        { name: "Parker Roth" },
        { name: "Nicklaus Hernan" },
        { name: "Steve Nichol" }
      ]
    }
  }

  render() {
    return (
      <div className="content">
        <header>
          <Logo />
          <Weather />
        </header>

        <div className="hero">
          <div className="hero-content">
            <h1>Discuss, share, and think.</h1>
            <p>We are a guild of creatives from different companies, industries, and teams in Peoria, IL.</p>
          </div>
          <div className="hero-illustration">
            <img src="https://images.typeform.com/images/NyPyAGkia9F4/image/default#.gif" alt="Art" />
          </div>
        </div>

        <h1>{this.state.members.length} Guild Members</h1>
        <div className="members">
          {this.state.members.map((member, index) => <Member key={index} name={member.name} />)}
        </div>

        <a href="https://chandlerroth.typeform.com/to/bfG7L5" className="button">Join the Guild</a>
      </div>
    );
  }
}

export default App;
