import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Compass = ({ location, magHeading, trueHeading }) => {
  const { coords: { longitude, latitude }} = location;
  return (
    <View style={styles.sensor}>
      <Text> Current Location </Text>
      <Text>
        lat: {latitude}
        long: {longitude}
      </Text>
      <Text> Current Heading </Text>
      <Text>
        true: {trueHeading}
        magnetic: {magHeading}
        diff: { magHeading - trueHeading }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
});

export default Compass;
