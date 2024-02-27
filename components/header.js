import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>What's cookin' good lookin'?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#CC6E00',
    height: '15%',
    borderBottomWidth: 2, // Add a bottom border
    borderBottomColor: '#cb6100',
  },
  title: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
    textShadowRadius: 10,
    textShadowColor: 'black',
    paddingBottom: 10,
  },
});

export default Header;
