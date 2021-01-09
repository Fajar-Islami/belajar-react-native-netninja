import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 40,
    backgroundColor: '#ddd',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxOne: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    flex: 2,
    backgroundColor: 'gold',
    padding: 20,
    //   alignSelf: 'flex-end',
  },
  boxThree: {
    flex: 3,
    backgroundColor: 'coral',
    padding: 30,
  },
  boxFour: {
    flex: 4,
    backgroundColor: 'skyblue',
    padding: 40,
    // alignSelf: 'flex-start',
  },
});
