import React, { Component } from 'react';
import { CandidateContainer } from './candidate_container.component'

import '../styles/App.css'
import { PicketMap } from './picket_map.component';

export class App extends Component {

  render () {
    return (
      <div className="App">
        <CandidateContainer />
        <PicketMap/>
      </div>
    )
  }

}