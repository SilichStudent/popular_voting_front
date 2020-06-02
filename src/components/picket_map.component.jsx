import React, { Component } from 'react';
import { YMaps, Map } from 'react-yandex-maps';

export class PicketMap extends Component {
  render() {
    return (
      <div>
        <YMaps>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width="100%"/>
        </YMaps>
      </div>
    );
  }
}
