import React, { Component } from 'react';
import { initCandidatesObjects } from '../common/point-storage';

export class PicketMap extends Component {
  componentDidMount() {
    window.addEventListener('load', async () => {
      while (!this.props.candidates || this.props.candidates.length === 0) {
        await new Promise(r => setTimeout(r, 50));
      }
      this.handleLoad();
    });
  }

  shouldComponentUpdate () {
    if (!this.props.candidates || this.props.candidates.length === 0) {
      return true;
    }
    return false;
  }

  handleLoad = () => {
    window.ymaps.ready(() => {
      initCandidatesObjects(this.props.candidates)
    });
  }

  render() {
    if (!this.props.candidates || this.props.candidates.length === 0) {
      return null;
    }

    return <div id="map"></div>;
  }
}
