import * as React from 'react';
import { connect } from 'react-redux';

import { getMap } from '../lib/GoogleMapsAPI';

interface Center {
  lat: number;
  lng: number;
}

interface GoogleMapState {
  center: Center;
  zoom: number;
}

interface GoogleMapsProps {
  path?: any;
}

// For the sake of demonstration, using Hong Kong as the central coordinates
enum HongKongCoords {
  Lat = 22.3447354,
  Lng = 114.1798767,
}

export class GoogleMap extends React.Component<any, GoogleMapState> {

  googleMap: any;
  polyline: any;

  getMap: Function;

  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: HongKongCoords.Lat,
        lng: HongKongCoords.Lng,
      },
      zoom: 11,
    };

    this.getMap = getMap;
  }

  componentDidUpdate() {
    if (this.props.path && Array.isArray(this.props.path)) {
      this.getMap().then(map => {
        const path = this.props.path.map(coord => {
          const [lat, lng] = coord;
          return {
            lat: parseFloat(lat),
            lng: parseFloat(lng),
          };
        });
        this.polyline = new map.Polyline({
          path,
          geodesic: true,
          strokeColor: '#ff844c',
          strokeWeight: 5,
          strokeOpacity: 1,
        });

        this.polyline.setMap(null); // Clear Existing Polylines
        this.polyline.setMap(this.googleMap);

      });
    }

  }

  componentDidMount() {
    this.getMap().then(googleMaps => {
      const { center, zoom } = this.state;
      this.googleMap = new googleMaps.Map(document.getElementById('google-map'), { zoom, center});
    });
  }

  render() {
    return (
      <div id="google-map" style={{ width: '100%' , height: '100%' }} />
    );
  }

}

const mapStateToProps = ({ directions }) => {

  return {
    path: directions.path,
  };
};

export default connect(mapStateToProps)(GoogleMap);