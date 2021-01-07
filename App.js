import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LatTextInput from './src/Latihan/Lat5-TextInput';
import ListScrollView from './src/Latihan/Lat6-ListScrollView';
import LatFlatList from './src/Latihan/Lat7-FlatList';

const App = () => {
  return (
    <>
      {/* <LatTextInput /> */}
      {/* <ListScrollView /> */}
      <LatFlatList />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
