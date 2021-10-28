import MainStackNavigator from './MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootNavigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainStackNavigator"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="MainStackNavigator"
          component={MainStackNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigators;
