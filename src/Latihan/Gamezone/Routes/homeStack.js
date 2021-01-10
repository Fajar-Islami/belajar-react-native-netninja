import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReviewDetails from '../Screen/ReviewDetail';
import Home from '../Screen/Home';
import Header from '../shared/Header';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          height: 60,
        },
        headerTintColor: '#444', // warna text
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="Gamezone" />
            ),
          };
        }}
      />
      <Stack.Screen
        name="Review"
        component={ReviewDetails}
        options={{
          title: 'Review Details',
        }}
      />
    </Stack.Navigator>
  );
};
