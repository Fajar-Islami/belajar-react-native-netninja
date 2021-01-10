import {List, ListItem, Text} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../../styles/global';

export default function Home({navigation}) {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
  ]);

  return (
    <View style={globalStyles.container}>
      <List
        dataArray={reviews}
        renderRow={(item) => (
          <ListItem onPress={() => navigation.navigate('Review', item)}>
            {/* Param kedua kirim data */}
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </ListItem>
        )}
      />
    </View>
  );
}
