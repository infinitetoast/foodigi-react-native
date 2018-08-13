import React, { Component } from 'react';
import Compass from '../components/Compass';
import { Constants, Location, Permissions } from 'expo';

class CompassContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        mocked: true,
        timestamp: 45561461,
        coords: {
          speed: 0,
          heading: 0,
          accuracy: 16,
          longitude: -90,
          latitude: 30,
        }
      },
      magHeading: null,
      trueHeading: null,
    };
  }
  
  componentDidMount() {
    this._getLocation();
    this._watchHeading();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  async _getLocation() {
    console.log('getting location');
    
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    const location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  }

  async _watchHeading() {
    this._subscription = await Location.watchHeadingAsync(({ magHeading, trueHeading, accuracy }) => {
      console.log({ magHeading, trueHeading, headingAccuracy: accuracy });
      this.setState({ magHeading, trueHeading, headingAccuracy: accuracy });
    });
  }

  render() {
    const { location, magHeading, trueHeading } = this.state;
    return (
      <Compass
        location={location}
        magHeading={magHeading}
        trueHeading={trueHeading}
      />
    );
  }
};

export default CompassContainer;
