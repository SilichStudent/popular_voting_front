import React, { Component } from 'react';

import '../styles/Candidate.css';

export class Candidate extends Component {
  render() {
    return (
      <div
        className={`Candidate${this.props.selected ? ' sahdddd' : ''}`}
        onClick={() => this.props.selectCandidate(this.props.id)}
      >
        <img src={this.props.src} alt={this.props.name} />
        <div className="CandidateInfo">
          <div className="CandidateName">{this.props.name}</div>
          <div className="CandidateDescription">{this.props.decription}</div>
        </div>
      </div>
    );
  }
}
