import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const LatFlatList = () => {
  const [people, setPeople] = useState([
    {name: 'Ahmad', id: '1'},
    {name: 'Fajar', id: '2'},
    {name: 'Islami', id: '3'},
    {name: 'Muhammad', id: '4'},
    {name: 'Hanif', id: '5'},
    {name: 'Karim', id: '6'},
    {name: 'Abdul', id: '7'},
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latihan Flatlist</Text>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
};

export default LatFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
