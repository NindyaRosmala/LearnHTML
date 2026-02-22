import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import api, { THEME } from '../api/axios';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await api.post('/auth/register', { name, email, password });
      alert("Registration Successful!");
    } catch (error) {
      alert("Registration Failed.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join NindyaHub and start your journey</Text>

      <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleRegister} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: THEME.background },
  title: { fontSize: 30, fontWeight: 'bold', color: THEME.foreground, textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, color: THEME.muted, textAlign: 'center', marginBottom: 32 },
  input: { 
    borderWidth: 1, 
    borderColor: THEME.input, 
    padding: 14, 
    borderRadius: THEME.radius, 
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff'
  },
  button: { 
    backgroundColor: THEME.primary, 
    padding: 16, 
    borderRadius: THEME.radius, 
    alignItems: 'center',
    marginTop: 8,
    cursor: 'pointer'
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});

export default RegisterScreen;