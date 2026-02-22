import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import AppSidebar from '../component/AppSidebar'; 

const Dashboard = ({ onNavigate, user }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setSidebarVisible(true)} style={styles.menuBtn}>
          <Text style={{ fontSize: 24 }}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.logoText}>NindyaHub</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Sidebar */}
      <AppSidebar 
        isVisible={isSidebarVisible} 
        onClose={() => setSidebarVisible(false)} 
        currentRoute="Dashboard"
        onNavigate={(route) => {
          setSidebarVisible(false);
          if (onNavigate) onNavigate(route);
        }}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.welcomeBox}>
          <Text style={styles.title}>Dashboard</Text>
          <Text style={styles.subtitle}>Halo, {user?.username || 'Nindya'}!</Text>
        </View>
        
        {/* Tombol Video Tutorial */}
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => onNavigate('Video Tutorial')}
        >
          <Text style={styles.cardIcon}>📹</Text>
          <View>
            <Text style={styles.cardTitle}>Video Tutorial</Text>
            <Text style={styles.cardDesc}>Tonton panduan DIY interaktif.</Text>
          </View>
        </TouchableOpacity>

        {/* Tombol Read Articles */}
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => onNavigate('Read Articles')}
        >
          <Text style={styles.cardIcon}>📖</Text>
          <View>
            <Text style={styles.cardTitle}>Read Articles</Text>
            <Text style={styles.cardDesc}>Baca panduan DIY mendalam.</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  topBar: { 
    height: 60, flexDirection: 'row', alignItems: 'center', 
    justifyContent: 'space-between', paddingHorizontal: 15, 
    backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e5e7eb' 
  },
  menuBtn: { padding: 5 },
  logoText: { fontSize: 18, fontWeight: 'bold', color: '#3b82f6' },
  content: { padding: 24 },
  welcomeBox: { marginBottom: 30 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#111827' },
  subtitle: { fontSize: 14, color: '#6B7280', marginTop: 4 },
  card: {
    backgroundColor: '#fff', padding: 20, borderRadius: 24, 
    flexDirection: 'row', alignItems: 'center', marginBottom: 16,
    borderWidth: 1, borderColor: '#f1f5f9', elevation: 2
  },
  cardIcon: { fontSize: 30, marginRight: 20 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#1e293b' },
  cardDesc: { fontSize: 12, color: '#64748b' }
});

export default Dashboard;