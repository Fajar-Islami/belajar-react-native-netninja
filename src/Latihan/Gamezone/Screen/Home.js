import {Button, Text} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../../styles/global';

export default function Home({navigation}) {
  const pressHandler = () => {
    navigation.navigate('Review');

    // method lain
    // navigation.push('Review');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button success onPress={pressHandler}>
        <Text>Go To Review details</Text>
      </Button>
    </View>
  );
}
