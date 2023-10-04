import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './pages/HomePage';
import List from './pages/ListPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import ListPage from './pages/ListPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home Page' }} />
        <Stack.Screen name="List" component={ListPage} options={{ title: 'List Page' }} />
        <Stack.Screen name="Profile" component={ProfilePage} options={{ title: 'Profile Page' }} />
        <Stack.Screen name="Settings" component={SettingsPage} options={{ title: 'Settings Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
