import React, { Component } from 'react';
import { CandidateContainer } from './candidate_container.component'

import '../styles/App.css'

export class App extends Component {

  render () {
    return (
      <div className="App">
          <CandidateContainer />
      </div>
    )
  }

}