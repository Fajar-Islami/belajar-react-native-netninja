import {Button, Text} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../../styles/global';

export default function ReviewDetails({route, navigation}) {
  const item = route.params;

  return (
    <View style={globalStyles.container}>
      <Text>{item.title}</Text>
      <Text>{item.body}</Text>
      <Text>{item.rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
