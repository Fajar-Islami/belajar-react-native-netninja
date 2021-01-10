import {Text, Card, CardItem, Body} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../../styles/global';

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
          <Text>{item.rating}</Text>
        </CardItem>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
