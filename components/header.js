import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Cook Bitch!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    height: '8%',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default Header;
