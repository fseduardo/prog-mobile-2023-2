import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function ProfilePage() {
  // Exemplo de dados do perfil (pode ser recuperado de uma API, banco de dados, etc.)
  const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    imageUrl: "https://via.placeholder.com/100"  // Aqui usamos um placeholder de imagem, substitua pelo URL real
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: profile.imageUrl }} style={styles.profileImage} />
      <Text style={styles.profileName}>{profile.name}</Text>
      <Text style={styles.profileEmail}>{profile.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,  // Isto fará a imagem ficar redonda
    marginBottom: 20
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  profileEmail: {
    fontSize: 16,
    color: '#666'
  }
});

export default ProfilePage;
