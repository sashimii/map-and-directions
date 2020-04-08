import * as React from 'react';

import * as L from 'leaflet';

import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

// import * as data from '../data/time-series.json';

// console.log(data);

import { connect } from 'react-redux';
import './LeafletMap.scss';

const position = [51.505, -0.09];

// const dayOfData = data['2020-1-22'];

interface LeafletMapProps {
  // allDates: string[];
  // currentDate: string;
  covidData: any;
}

export class LeafletMap extends React.Component<LeafletMapProps, {}> {

  // const dayToRender = covidTimeSeries[currentDate];

  render () {
    const {covidData} = this.props;
    console.log('***', covidData);
    return (
      <div style={{ height: '100%' }}>
        <Map center={position} zoom={3}>
          <HeatmapLayer
            points={covidData}
            fitBoundsOnLoad
            fitBoundsOnUpdate
            longitudeExtractor={({coords}) => {
              return coords[1];
            }}
            latitudeExtractor={({coords}) => coords[0]}
            intensityExtractor={({deaths}) => deaths}
          />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
        </Map>
      </div>
    );

  }

}

const mapStateToProps = ({allDates, currentDate, covidTimeSeries}) => {
  const currentDateData = covidTimeSeries[currentDate];
  return {covidData: Object.values(currentDateData)};
};

export default connect(mapStateToProps)(LeafletMap);