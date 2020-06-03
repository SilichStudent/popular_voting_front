import React, { Component } from 'react';

export class Footer extends Component {

  render () {
    return (
      <div className="Footer">
        <p>Для связи пишите на почту {process.env.EMAIL}</p>
      </div>
    )
  }
}
