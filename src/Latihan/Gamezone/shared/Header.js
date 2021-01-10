import {Icon} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

const Header = ({navigation, title}) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require('../../../../assets/game_bg.png')}
      style={styles.header}>
      <Icon
        type="MaterialIcons"
        fontSize={28}
        name="menu"
        style={styles.icon}
        onPress={openMenu}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../../../../assets/heart_logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
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
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    height: 26,
    width: 26,
    marginHorizontal: 10,
  },
});
