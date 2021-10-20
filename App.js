import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState, useEffect} from "react";

import HomeScreen from './components/HomeScreen.js'
import SearchScreen from './components/SearchScreen.js'
import DetailScreen from './components/DetailScreen.js'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Seenema"component={HomeScreen} options={{ title: 'Seenema', headerStyle: { backgroundColor: '#0d73dd'}, headerTintColor: 'ivory', headerTitleStyle: {fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 30 },  }}/>
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Search', headerStyle: { backgroundColor: '#0d73dd'}, headerTintColor: 'ivory', headerTitleStyle: {fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 30 },  }} />
        <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Details', headerStyle: { backgroundColor: '#0d73dd'}, headerTintColor: 'ivory', headerTitleStyle: {fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 30 },  }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;