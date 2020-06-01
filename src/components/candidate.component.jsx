import React, { Component } from "react";

import '../styles/Candidate.css'

export class Candidate extends Component {

  render () {
    return (
      <div className="Candidate">
        <img src={this.props.src} alt={this.props.name} />
        <div className="candidate-name">{this.props.name}</div>
        <div>
          {this.props.decription}
        </div>
      </div>
    )
  }
}