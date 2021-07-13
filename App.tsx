import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Views/Home';
import Details from './src/Views/Details';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animationEnabled: false}}>
        <Stack.Screen name="Home" options={{ headerShown: false, animationEnabled: false,}}  component={Home} />
        <Stack.Screen name="Details" options={{ headerShown: false, animationEnabled: false,}}  component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

