import React, { Component } from 'react';
import { Candidate } from './candidate.component';
import { getPhotoByUser } from '../common/CandidatePhotoUtils'

import '../styles/CandidatesContainer.css';

export class CandidateContainer extends Component {
  render() {
    return (
      <div className="CandidatesContainer l-wrap">
        {this.props.candidates.map(candidate => {
          return (<Candidate key={candidate.id} src={getPhotoByUser(candidate)} name={candidate.nameSurname} decription= { candidate.description }/>)
        })}
      </div>
    );
  }
}
