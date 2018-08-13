import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CompassContainer from './containers/CompassContainer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CompassContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
