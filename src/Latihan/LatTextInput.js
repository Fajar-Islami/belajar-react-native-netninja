import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function LatTextInput() {
  const [name, setName] = useState('Fajar');
  const [age, setAge] = useState(20);

  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g Fajar"
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter Age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g 20"
        onChangeText={(val) => setAge(val)}
      />
      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
