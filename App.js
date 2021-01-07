import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [name, setName] = useState('Fajar');
  const [person, setPerson] = useState({name: 'Ahmad', age: 40});

  const clickHandler = () => {
    setName('Ahmad');
    setPerson({name: 'Fajar', age: 20});
  };
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
