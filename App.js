import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppNavigator from './src/Latihan/Gamezone/Routes/AppNavigator';
import Home from './src/Latihan/Gamezone/Screen/Home';
import LatTextInput from './src/Latihan/Lat5-TextInput';
import ListScrollView from './src/Latihan/Lat6-ListScrollView';
import LatFlatList from './src/Latihan/Lat7-FlatList';
import LatTouchable from './src/Latihan/Lat8-Touchable';
import ToDoApp from './src/Latihan/ToDoApp/ToDoApp';

const App = () => {
  return (
    <>
      {/* <View> */}
      {/* <LatTextInput /> */}
      {/* <ListScrollView /> */}
      {/* <LatFlatList /> */}
      {/* <LatTouchable /> */}
      {/* <ToDoApp /> */}
      {/* <Home /> */}
      <AppNavigator />
      {/* </View> */}
    </>
  );
};

export default App;
