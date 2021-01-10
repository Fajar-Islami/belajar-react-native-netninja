import {List, ListItem, Text, Card, CardItem, Body, Icon} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {globalStyles} from '../../../../styles/global';

export default function Home({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);

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
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <Icon
            type="MaterialIcons"
            name="close"
            style={{...styles.modalToggle, ...styles.modalClose}}
            onPress={() => setModalOpen(false)}
          />
          <Text>Hello from modal</Text>
        </View>
      </Modal>

      <Icon
        type="MaterialIcons"
        name="add"
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <List
        dataArray={reviews}
        renderRow={(item) => (
          <Card>
            <ListItem onPress={() => navigation.navigate('Review', item)}>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </ListItem>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    fontSize: 24,
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
