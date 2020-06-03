import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export class PicketMap extends Component {
  render() {
    return (
      <div>
        <YMaps query={{ apikey: 'dc729c6b-ffb0-4455-9e1b-43c5eee8e206' }}>
          <Map
            defaultState={{ center: [53.9, 27.55], zoom: 6 }}
            width="100%"
            height="500px"
          >
            {this.props.candidates
              .filter(
                (candidate) =>
                this.props.selectedCandidates === 0 || this.props.selectedCandidates.indexOf(candidate.id) > -1
              )
              .map((candidate) => {
                return candidate.coordinates
                  .map((c) => {
                    const cord = c.value
                      .split(',')
                      .map((co) => co.trim())
                      .map((co) => parseFloat(co));
                    return (
                      <Placemark
                        key={`${candidate.id}_${c.id}`}
                        geometry={cord}
                        properties={{
                          balloonContent: `<strong>${candidate.nameSurname}</strong>, ${c.description}`,
                          iconCaption: `${candidate.nameSurname}`,
                        }}
                        options={{
                          preset: 'islands#icon',
                          iconColor: candidate.color,
                        }}
                        modules={['geoObject.addon.balloon']}
                      />
                    );
                  })
                  .flat();
              })}
          </Map>
        </YMaps>
      </div>
    );
  }
}
