import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ReviewDetails from '../Screen/ReviewDetail';
import Home from '../Screen/Home';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  );
};

// export default AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <HomeNavigator />
//     </NavigationContainer>
//   );
// };

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
