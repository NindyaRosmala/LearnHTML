import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, SafeAreaView } from 'react-native';

const AppSidebar = ({ isVisible, onClose, currentRoute, onNavigate }) => {
  const items = [
    { title: "Dashboard", icon: "📊" },
    { title: "Video Tutorial", icon: "📹" },
    { title: "Read Articles", icon: "📖" },
    { title: "Settings", icon: "⚙️" },
  ];

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <SafeAreaView style={styles.sidebarContainer}>
          <View style={styles.content}>
            <Text style={styles.groupLabel}>MENU UTAMA</Text>
            {items.map((item) => (
              <TouchableOpacity 
                key={item.title} 
                style={[styles.menuButton, currentRoute === item.title && styles.menuActive]}
                onPress={() => {
                   if (onNavigate) onNavigate(item.title);
                   onClose();
                }}
              >
                <Text style={styles.iconText}>{item.icon}</Text>
                <Text style={[styles.menuText, currentRoute === item.title ? styles.textActive : styles.textInactive]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
        <Pressable style={styles.clickableOverlay} onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', flexDirection: 'row' },
  sidebarContainer: { width: '75%', backgroundColor: '#fff', height: '100%' },
  content: { padding: 25, paddingTop: 50 },
  groupLabel: { fontSize: 11, fontWeight: 'bold', color: '#3b82f6', marginBottom: 20 },
  menuButton: { flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 15, marginBottom: 8 },
  menuActive: { backgroundColor: '#eff6ff' },
  iconText: { fontSize: 18, marginRight: 15 },
  menuText: { fontSize: 15, fontWeight: '600' },
  textActive: { color: '#3b82f6' },
  textInactive: { color: '#475569' },
  clickableOverlay: { flex: 1 }
});

export default AppSidebar;