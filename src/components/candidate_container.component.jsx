import React, { Component } from 'react';
import { Candidate } from './candidate.component';
import { getPhotoByUser } from '../common/CandidatePhotoUtils';

import '../styles/CandidatesContainer.css';

export class CandidateContainer extends Component {
  render() {
    return (
      <div className="CandidatesContainer l-wrap">
        {this.props.candidates.map((candidate) => {
          const selected =
            this.props.selectedCandidates.indexOf(candidate.id) > -1;
          return (
            <Candidate
              key={candidate.id}
              id={candidate.id}
              selected={selected}
              src={getPhotoByUser(candidate)}
              name={candidate.nameSurname}
              decription={candidate.description}
              selectCandidate={this.props.selectCandidate}
            />
          );
        })}
      </div>
    );
  }
}
