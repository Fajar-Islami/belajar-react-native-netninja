import {Icon} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({navigation, title}) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <Icon
        type="MaterialIcons"
        fontSize={28}
        name="menu"
        style={styles.icon}
        onPress={openMenu}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 0,
  },
});
