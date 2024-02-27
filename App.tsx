import React from 'react';
import {
  StatusBar,
  View,
  Text,
  //ImageBackground,
  StyleSheet,
  Alert,
  //Button,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';
import Header from './components/header';

const App = () => {
  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={'#CC6E00'} />
      <Header />
      {/* <ImageBackground
        source={require('./assets/Shefvs.png')}
        resizeMode="cover"
        style={styles.image}></ImageBackground> */}
      {/* <Button
        title="Press me ;)"
        onPress={() => Alert.alert('Hello there! You indecisive fuck')}
        color="#984900"
      /> */}
      <TouchableOpacity
        onPress={() => Alert.alert('Bread and eggs')}
        style={styles.breakfast}>
        <Text style={styles.breakfastText}>Breakfast</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert('Make yourself a sandwhich')}
        style={styles.lunch}>
        <Text style={styles.lunchText}>Lunch</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert('Dal Chawal Khao')}
        style={styles.dinner}>
        <Text style={styles.dinnerText}>Dinner</Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonText = {
  color: 'yellow',
  textAlign: 'center',
  fontSize: 20,
};
const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: '#FFE500',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingTop: 50,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  breakfast: {
    backgroundColor: '#cc0000',
    marginRight: '60%',
    marginLeft: '10%',
    marginVertical: '10%',
    paddingHorizontal: 10,
    paddingVertical: 40,
    borderRadius: 500,
  },
  breakfastText: {
    ...buttonText,
  },

  lunch: {
    backgroundColor: '#cc0000',
    marginRight: '10%',
    marginLeft: '60%',
    marginVertical: '25%',
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderRadius: 500,
  },
  lunchText: {
    ...buttonText,
  },
  dinner: {
    backgroundColor: '#cc0000',
    marginRight: '60%',
    marginLeft: '10%',
    marginVertical: '8%',
    paddingHorizontal: 10,
    paddingVertical: 40,
    borderRadius: 500,
  },
  dinnerText: {
    ...buttonText,
  },
});

export default App;
