import React, { Component } from 'react';
import Logo from './Logo.js';
import Member from './Member.js';
import Weather from './Weather.js';
import HeroGraphic from './HeroGraphic.js'
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
        { name: "Matt Blick" },
        { name: "Kayla Phillips" },
        { name: "David Nielsen" },
        { name: "Chad DeWeese" },
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
            <h1>Discuss, share, and imagine.</h1>
            <p>We are a guild of creatives from different companies, industries, and teams in Peoria, IL.</p>
            <a href="https://chandlerroth.typeform.com/to/bfG7L5" className="button">Join the Guild</a>
          </div>
          <div className="hero-illustration">
            <HeroGraphic/>
          </div>
        </div>

        <section>
          <div className="craftsmanship">
            <h1>We belive in Craftsmanship</h1>
            <p>Craftsmanship is a personal commitment held by each guild member, striving for the utmost in our professionalism. The Three Pillars of Craftsmanship are:</p>
            <ol>
              <li>We will strive for the utmost quality within ourselves, and with what we make for others.</li>
              <li>We are committed to lifelong learning, and pushing our craft ever forward in a pragmatic way.</li>
              <li>We are confident in being creative, and will not apologize for experimentation.</li>
            </ol>
          </div>

          <div className="guild">
            <h1>{this.state.members.length} Guild Members</h1>
            <div className="members">
              {this.state.members.map((member, index) => <Member key={index} name={member.name} />)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
