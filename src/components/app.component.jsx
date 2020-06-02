import React, { Component } from 'react';
import { CandidateContainer } from './candidate_container.component'

import '../styles/App.css'
import { PicketMap } from './picket_map.component';
import response from "../static/response.json"

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    Promise.resolve(response)
      .then(r => {
        this.setState({ users: r })
      })
  }

  render () {
    return (
      <div className="App">
        <CandidateContainer users={this.state.users}/>
        <PicketMap users={this.state.users}/>
      </div>
    )
  }

}