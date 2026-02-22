import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import api, { THEME } from '../api/axios';

const LoginScreen = ({ onLoginSuccess }) => {
  // Ganti dari email ke username
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // 1. Validasi Input
    if (!username || !password) {
      alert("Please fill in both username and password.");
      return;
    }

    setLoading(true);
    try {
      // 2. Request ke Backend (Kirim username & password)
      const response = await api.post('/auth/login', { username, password });
      
      console.log("Login Success:", response.data);
      alert("Login Successful! Welcome back.");

      // 3. Pindah ke Dashboard
      if (onLoginSuccess) {
        onLoginSuccess(response.data.user); // Lempar data user ke App.js jika perlu
      }
    } catch (error) {
      console.error("Login Error:", error);
      const errorMsg = error.response?.data?.message || "Login failed. Check your username/password.";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>NindyaHub</Text>
        <Text style={styles.subtitle}>Enter your username to access your account</Text>
      </View>

      <View style={styles.form}>
        {/* INPUT USERNAME */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Username" 
            value={username} 
            onChangeText={setUsername} // Simpan ke state username
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Password</Text>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <TextInput 
            style={styles.input} 
            placeholder="••••••••" 
            value={password} 
            onChangeText={setPassword} 
            secureTextEntry 
          />
        </View>

        <TouchableOpacity 
          style={[styles.button, loading && { opacity: 0.7 }]} 
          onPress={handleLogin} 
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Sign In</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ... Styles tetap sama ...
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: THEME.background },
    header: { marginBottom: 32 },
    title: { fontSize: 30, fontWeight: 'bold', color: THEME.foreground, textAlign: 'center', marginBottom: 8 },
    subtitle: { fontSize: 14, color: THEME.muted, textAlign: 'center' },
    form: { width: '100%' },
    inputGroup: { marginBottom: 20 },
    labelRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
    label: { fontSize: 14, fontWeight: '600', color: THEME.foreground, marginBottom: 8 },
    forgotText: { fontSize: 12, color: THEME.primary, fontWeight: '500' },
    input: { borderWidth: 1, borderColor: THEME.input, padding: 12, borderRadius: THEME.radius, fontSize: 16, backgroundColor: '#fff', color: THEME.foreground },
    button: { backgroundColor: THEME.primary, padding: 14, borderRadius: THEME.radius, alignItems: 'center', marginTop: 10, elevation: 2 },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});

export default LoginScreen;