import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { THEME } from '../api/axios';

const SidebarSettings = ({ activeTab, setActiveTab, onBack }) => {
  const settingsMenu = [
    { id: "profile", label: "Profil Account", icon: "🏪" },
    { id: "account", label: "Akun & Keamanan", icon: "🛡️" },
    { id: "notif", label: "Notifikasi", icon: "🔔" },
    { id: "bookmark", label: "Koleksi & Bookmark", icon: "🔖" },
  ];

  return (
    <View style={styles.container}>
      {/* Tombol Back ke Dashboard */}
      <TouchableOpacity 
        onPress={onBack} 
        style={styles.backButton}
        activeOpacity={0.7}
      >
        <Text style={styles.backText}>←  KEMBALI KE DASHBOARD</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <h1 style={styles.title}>Settings</h1>
        <Text style={styles.subtitle}>
          Kelola preferensi dan akun NindyaHub
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.nav}>
          {settingsMenu.map((menu) => (
            <TouchableOpacity
              key={menu.id}
              onPress={() => setActiveTab(menu.id)}
              style={[
                styles.menuItem,
                activeTab === menu.id ? styles.menuActive : styles.menuInactive
              ]}
            >
              <Text style={styles.icon}>{menu.icon}</Text>
              <Text style={[
                styles.menuLabel,
                activeTab === menu.id ? styles.labelActive : styles.labelInactive
              ]}>
                {menu.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  backButton: {
    marginBottom: 32,
  },
  backText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#6b7280', // muted-foreground
    letterSpacing: 1.5,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.primary,
  },
  subtitle: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
    lineHeight: 16,
  },
  nav: {
    gap: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 12,
  },
  menuActive: {
    backgroundColor: THEME.primary,
    // Shadow untuk iOS & Android
    elevation: 4,
    shadowColor: THEME.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  menuInactive: {
    backgroundColor: '#f9fafb', // muted
  },
  icon: {
    fontSize: 16,
  },
  menuLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  labelActive: {
    color: '#ffffff',
  },
  labelInactive: {
    color: '#374151',
  },
});

export default SidebarSettings;