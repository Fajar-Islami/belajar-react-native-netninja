import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LatTextInput from './src/Latihan/LatTextInput';

const App = () => {
  return (
    <View style={styles.container}>
      <LatTextInput />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
