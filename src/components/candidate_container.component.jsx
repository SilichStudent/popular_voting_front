import React, { Component } from 'react';
import { Candidate } from './candidate.component';
import { getPhotoByUser } from '../common/CandidatePhotoUtils'

import '../styles/CandidatesContainer.css';

export class CandidateContainer extends Component {
  render() {
    return (
      <div className="CandidatesContainer l-wrap">
        {this.props.users.map(u => {
          return (<Candidate key={u.id} src={getPhotoByUser(u)} name={u.nameSurname} decription= { u.description }/>)
        })}
      </div>
    );
  }
}
