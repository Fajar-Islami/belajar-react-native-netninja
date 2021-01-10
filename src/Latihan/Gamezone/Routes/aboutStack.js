import React from 'react';
import About from '../Screen/About';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../shared/Header';

const Stack = createStackNavigator();

export const Aboutstack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        },
        headerTintColor: '#444', // warna text
      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="About Gamezone" />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};
