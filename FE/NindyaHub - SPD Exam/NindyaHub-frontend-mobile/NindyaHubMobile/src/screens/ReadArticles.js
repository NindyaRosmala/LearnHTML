import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ContentCard from '../component/ContentCard';

const ReadArticles = () => {
  // Dummy data (nanti bisa fetch dari API kamu)
  const items = [
    { _id: '1', title: 'Cara Membuat Rak Kayu', category: 'DIY', description: 'Panduan lengkap membuat rak minimalis.', thumbnail: 'https://picsum.photos/400/200', type: 'Read' }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Read Articles</Text>
        <Text style={styles.subtitle}>Temukan berbagai panduan DIY dalam bentuk artikel mendalam.</Text>
      </View>

      <View style={styles.catalog}>
        {items.map(item => (
          <ContentCard key={item._id} {...item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { marginBottom: 24 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0f172a' },
  subtitle: { fontSize: 14, color: '#64748b', marginTop: 4 },
  catalog: { backgroundColor: '#fff', borderRadius: 32, padding: 16, borderWidth: 1, borderColor: '#f1f5f9' }
});

export default ReadArticles;