import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, LogBox, SafeAreaView } from 'react-native';
import { THEME } from './src/api/axios';

// Import ketiga halaman kamu
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/Dashboard';

LogBox.ignoreAllLogs();

function App() {
  // Sekarang state-nya bisa berisi: 'login', 'register', atau 'dashboard'
  const [currentScreen, setCurrentScreen] = useState('login');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        {/* Logika Navigasi 3 Halaman */}
        {currentScreen === 'login' ? (
          <LoginScreen onLoginSuccess={() => setCurrentScreen('dashboard')} />
        ) : currentScreen === 'register' ? (
          <RegisterScreen onRegisterSuccess={() => setCurrentScreen('login')} />
        ) : (
          <DashboardScreen onLogout={() => setCurrentScreen('login')} />
        )}
      </View>

      {/* Footer Navigasi (Hanya muncul jika BELUM di Dashboard) */}
      {currentScreen !== 'dashboard' && (
        <View style={styles.footer}>
          <TouchableOpacity 
            onPress={() => setCurrentScreen(currentScreen === 'login' ? 'register' : 'login')}
            style={styles.navButton}
          >
            <Text style={styles.navText}>
              {currentScreen === 'login' 
                ? "Don't have an account? Sign Up" 
                : "Already have an account? Log In"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: THEME.background },
  footer: { 
    padding: 20, 
    borderTopWidth: 1, 
    borderColor: THEME.border, 
    alignItems: 'center',
    backgroundColor: THEME.background
  },
  navButton: { padding: 10 },
  navText: { color: THEME.primary, fontWeight: '600', fontSize: 14 }
});

registerRootComponent(App);