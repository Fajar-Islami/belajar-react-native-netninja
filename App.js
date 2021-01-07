import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LatTextInput from './src/Latihan/Lat5-TextInput';
import ListScrollView from './src/Latihan/Lat6-ListScrollView';
import LatFlatList from './src/Latihan/Lat7-FlatList';
import LatTouchable from './src/Latihan/Lat8-Touchable';
import ToDoApp from './src/Latihan/ToDoApp/ToDoApp';

const App = () => {
  return (
    <>
      {/* <LatTextInput /> */}
      {/* <ListScrollView /> */}
      {/* <LatFlatList /> */}
      {/* <LatTouchable /> */}
      <ToDoApp />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
