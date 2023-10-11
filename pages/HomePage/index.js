import React from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput } from 'react-native';

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bem-vindo ao App</Text>
      
      <Image 
        source={{uri: 'https://placekitten.com/200/200'}} 
        style={styles.image}
      />

      <Text style={styles.label}>Digite algo:</Text>

      <TextInput style={styles.input} placeholder="Digite aqui..." />

      <View style={styles.buttonContainer}>
        <Button 
          title="Go to Profile" 
          color="#841584" 
          onPress={() => navigation.navigate('Profile')} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Go to List" 
          color="#1f8ef1" 
          onPress={() => navigation.navigate('List')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E9ECEF' 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 0,
    marginBottom: 32
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'rgb(67, 22, 22)',
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 8,
    marginBottom: 20
  },
  buttonContainer: {
    marginBottom: 10,
    width: '100%'
  }
});

export default HomePage;
