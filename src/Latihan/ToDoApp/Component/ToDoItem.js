import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Container, Header, Content, Icon} from 'native-base';

const ToDoItem = ({item, pressHandler}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Icon name="delete" type="MaterialCommunityIcons" />
        <Text style={styles.itemsText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ToDoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemsText: {
    marginLeft: 10,
  },
});
