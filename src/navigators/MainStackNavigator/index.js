import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screensData from './screens.data';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      {screensData.map(screen => (
        <Stack.Screen {...screen} key={screen.name} />
      ))}
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
