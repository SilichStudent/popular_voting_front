import React, { Component } from 'react';
import { CandidateContainer } from './candidate_container.component';

import '../styles/App.css';
import { PicketMap } from './picket_map.component';
import response from '../static/response.json';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      selectedCandidates: [],
    };
  }

  componentDidMount() {
    Promise.resolve(response).then((r) => {
      this.setState({ candidates: r });
    });
  }

  selectCandidate = (id) => {
    if (this.state.selectedCandidates.indexOf(id) > -1) {
      this.setState({
        selectedCandidates: this.state.selectedCandidates.filter(
          (sc) => sc !== id
        ),
      });
    } else {
      this.setState({
        selectedCandidates: this.state.selectedCandidates.concat(id),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <CandidateContainer
          candidates={this.state.candidates}
          selectedCandidates={this.state.selectedCandidates}
          selectCandidate={this.selectCandidate}
        />
        <PicketMap
          candidates={this.state.candidates}
          selectedCandidates={this.state.selectedCandidates}
        />
      </div>
    );
  }
}
