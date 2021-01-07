import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const LatTouchable = () => {
  const [people, setPeople] = useState([
    {name: 'Ahmad', id: '1'},
    {name: 'Fajar', id: '2'},
    {name: 'Islami', id: '3'},
    {name: 'Muhammad', id: '4'},
    {name: 'Hanif', id: '5'},
    {name: 'Karim', id: '6'},
    {name: 'Abdul', id: '7'},
  ]);
  const pressHandler = (id) => {
    console.log(id);
    // Fungsi berikut otomatis mengambil state sekarang
    setPeople((orangSekarang) => {
      return orangSekarang.filter((person) => person.id != id);
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latihan Touchable</Text>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default LatTouchable;

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
