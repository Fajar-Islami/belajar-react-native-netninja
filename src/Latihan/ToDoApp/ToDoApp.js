import React, {useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import AddTodo from './Component/AddTodo';
import Header from './Component/Header';
import ToDoItem from './Component/ToDoItem';

export default function ToDoApp() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS', 'Todo Must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <ToDoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
