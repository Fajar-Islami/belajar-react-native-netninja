import {Button, Text} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../../styles/global';

export default function ReviewDetails({navigation}) {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button onPress={pressHandler}>
        <Text>Back to home screen</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
