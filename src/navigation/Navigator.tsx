import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { HomeStackNavigator } from './stack/StackNavigator';


const Navigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;