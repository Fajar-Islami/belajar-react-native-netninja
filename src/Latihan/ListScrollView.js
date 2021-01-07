import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const ListScrollView = () => {
  const [people, setPeople] = useState([
    {name: 'Ahmad', key: '1'},
    {name: 'Fajar', key: '2'},
    {name: 'Islami', key: '3'},
    {name: 'Muhammad', key: '4'},
    {name: 'Hanif', key: '5'},
    {name: 'Karim', key: '6'},
    {name: 'Abdul', key: '7'},
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
