import React from 'react';
import { View, Text, Button } from 'react-native';

function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Page</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Go to List" onPress={() => navigation.navigate('List')} />
    </View>
  );
}

export default HomePage;
