import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';

const SettingsScreen = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    if (activeTab === 'profile') {
      return (
        <View style={styles.formCard}>
          <Text style={styles.sectionLabel}>👤 INFORMASI DASAR</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nama Akun</Text>
            <TextInput style={styles.input} placeholder="Nindya's Account" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Bisnis</Text>
            <TextInput style={styles.input} placeholder="nindya@example.com" keyboardType="email-address" />
          </View>

          <Text style={[styles.sectionLabel, { marginTop: 20 }]}>🖼️ BRANDING</Text>
          <View style={styles.avatarRow}>
            <View style={styles.avatarPlaceholder}><Text>👤</Text></View>
            <TouchableOpacity style={styles.btnOutline}><Text style={styles.btnOutlineText}>Ganti Foto</Text></TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.emptyCard}>
        <Text style={styles.emptyText}>Modul {activeTab} sedang dikembangkan 🛡️</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header Mobile */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}><Text style={styles.backBtn}>← Back</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        {/* Horizontal Tab Menu (Pengganti Sidebar Web agar hemat tempat di Mobile) */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
          {['profile', 'account', 'notif', 'bookmark'].map(tab => (
            <TouchableOpacity 
              key={tab} 
              onPress={() => setActiveTab(tab)}
              style={[styles.tabItem, activeTab === tab && styles.tabActive]}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                {tab.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {renderContent()}

        {/* Footer Action */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btnSave}>
            <Text style={styles.btnSaveText}>Simpan Perubahan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  header: { height: 60, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', px: 20, borderBottomWidth: 1, borderBottomColor: '#eee', paddingHorizontal: 15 },
  backBtn: { color: '#3b82f6', fontWeight: 'bold' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 20 },
  tabBar: { marginBottom: 20, flexDirection: 'row' },
  tabItem: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, marginRight: 10, backgroundColor: '#fff', borderWidth: 1, borderColor: '#eee' },
  tabActive: { backgroundColor: '#171717' },
  tabText: { fontSize: 12, fontWeight: 'bold', color: '#64748b' },
  tabTextActive: { color: '#fff' },
  formCard: { backgroundColor: '#fff', borderRadius: 30, padding: 25, borderWidth: 1, borderColor: '#eee' },
  sectionLabel: { fontSize: 10, fontWeight: 'bold', color: '#3b82f6', marginBottom: 15 },
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 12, fontWeight: 'bold', color: '#475569', marginBottom: 8 },
  input: { backgroundColor: '#f1f5f9', borderRadius: 15, height: 50, paddingHorizontal: 15 },
  avatarRow: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  avatarPlaceholder: { width: 60, height: 60, borderRadius: 20, backgroundColor: '#eff6ff', alignItems: 'center', justifyContent: 'center' },
  btnOutline: { borderWidth: 1, borderColor: '#3b82f6', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 10 },
  btnOutlineText: { color: '#3b82f6', fontSize: 12, fontWeight: 'bold' },
  footer: { marginTop: 20 },
  btnSave: { backgroundColor: '#3b82f6', height: 55, borderRadius: 20, alignItems: 'center', justifyContent: 'center', shadowColor: '#3b82f6', shadowOpacity: 0.3, shadowRadius: 10, elevation: 5 },
  btnSaveText: { color: '#fff', fontWeight: 'bold' },
  emptyCard: { padding: 50, alignItems: 'center', backgroundColor: '#fff', borderRadius: 30, borderStyle: 'dashed', borderWidth: 1, borderColor: '#cbd5e1' },
  emptyText: { color: '#94a3b8', textAlign: 'center', fontWeight: 'bold' }
});

export default SettingsScreen;