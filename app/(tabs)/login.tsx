import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // simple check (you can replace with real auth later)
    if (email.length > 0 && password.length > 0) {
      router.push('/page2'); // 👈 GO TO PAGE 2
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Logo */}
      <Image
        source={require('../../assets/images/logoeceje.png')} // change if needed
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Card */}
      <View style={styles.card}>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.forgot}>Mot de passe oublié?</Text>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>SE CONNECTER</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          créer un nouveau compte?{' '}
          <Text style={styles.signupLink} onPress={() => router.push('/signup')}>
            S’inscrire
          </Text>
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 220,
    height: 120,
    marginBottom: 20,
  },

  card: {
    width: '85%',
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },

  input: {
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },

  forgot: {
    marginTop: 8,
    fontSize: 12,
  },

  button: {
    backgroundColor: '#c41212',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  signupText: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
  },

  signupLink: {
    color: 'blue',
    fontWeight: 'bold',
  },
});