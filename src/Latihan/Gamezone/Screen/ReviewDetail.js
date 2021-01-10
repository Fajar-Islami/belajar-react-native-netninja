import {Text, Card, CardItem, Body} from 'native-base';
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {globalStyles, images} from '../../../../styles/global';

export default function ReviewDetails({route}) {
  const item = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <CardItem header>
          <Text style={globalStyles.titleText}>{item.title}</Text>
        </CardItem>

        <CardItem>
          <Body>
            <Text>{item.body}</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <View style={styles.rating}>
            <Text>Gamezone rating:</Text>
            <Image source={images.ratings[item.rating]} />
          </View>
        </CardItem>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingTop: 16,
    // marginTop: 16,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
