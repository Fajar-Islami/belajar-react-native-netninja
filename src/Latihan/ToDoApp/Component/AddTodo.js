import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const AddTodo = ({submitHandler}) => {
  const [text, setText] = useState('');
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="New todo..."
        onChangeText={(val) => changeHandler(val)}
        style={styles.input}
      />
      <Button
        color="coral"
        onPress={() => submitHandler(text)}
        title="add todo"
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
