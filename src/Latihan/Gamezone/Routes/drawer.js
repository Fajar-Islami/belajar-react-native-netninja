import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Aboutstack} from './aboutStack';
import {HomeStack} from './homeStack';
import React from 'react';

const Drawer = createDrawerNavigator();

export default RootDrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={Aboutstack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
