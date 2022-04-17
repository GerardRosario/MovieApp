import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
 
//Just a landing page for the app.
//Also has a decription of the app
export default class HomeScreen extends Component {
render() {
    return (
      <View style={styles.homeView}>
        <Image source={require("./SeenemaLogo7.jpg")} style={styles.screenImg} />
        <View style={styles.buttonContainer}>
          <Button
          type="clear"
          color="#0d73dd"
          title="Start Searching"
          onPress={() => this.props.navigation.navigate('Search')} //Has a button to naviagte to the search bar
        />
        <Text style={styles.written}>Seenema, is an application containing information called from the OMDB API. It's usage is includes searching for data about movies and tv series.</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // #0d73dd blue
  // #8c8e8b grey
  //  #555353 darker grey
  homeView: {
    flex: 1,  
    backgroundColor: '#555353',
    height: '100%',
  },
  screenImg: {
    marginTop: '0%',
    marginLeft: '0%'
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: '10%'
  },
  written: {
    textAlign: 'center',
    marginTop: '30%',
    marginLeft: '15%',
    marginRight: '10%',
    color: 'white'
  }

})
