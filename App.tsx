import React from 'react';
import {StatusBar, View, Text, StyleSheet} from 'react-native';
import Header from './components/header';

const App = () => {
  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={'purple'} />
      <Header />
      <Text style={styles.title}>What are we cooking?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingTop: 50,
  },
});

export default App;
