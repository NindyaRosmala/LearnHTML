import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import ContentCard from '../component/ContentCard';
import VideoDetail from './VideoDetail'; // Kita buat di bawah

const VideoTutorial = ({ onBack }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Simulasi fetch data (sesuaikan dengan API getAllContents kamu nanti)
  useEffect(() => {
    setTimeout(() => {
      const dummyData = [
        { 
          _id: '1', 
          title: 'Tutorial Membuat Meja Lipat', 
          category: 'Woodworking', 
          description: 'Panduan langkah demi langkah membuat meja lipat praktis untuk ruang sempit.', 
          thumbnail: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=500', 
          type: 'Video',
          updatedAt: '2026-02-17'
        },
      ];
      setItems(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  if (selectedVideo) {
    return <VideoDetail video={selectedVideo} onBack={() => setSelectedVideo(null)} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backBtn}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Video Tutorial</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.intro}>
          <Text style={styles.title}>Watch & Learn</Text>
          <Text style={styles.subtitle}>Tonton video panduan DIY terbaik kami.</Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#3b82f6" style={{ marginTop: 50 }} />
        ) : (
          <View style={styles.catalogCard}>
             {items.map((item) => (
               <ContentCard 
                key={item._id} 
                {...item} 
                onDetail={() => setSelectedVideo(item)} 
               />
             ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { height: 60, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, borderBottomWidth: 1, borderBottomColor: '#f1f5f9' },
  backBtn: { color: '#3b82f6', fontWeight: 'bold' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 20 },
  scrollContent: { padding: 20 },
  intro: { marginBottom: 20 },
  title: { fontSize: 26, fontWeight: '900', color: '#1e293b' },
  subtitle: { fontSize: 14, color: '#64748b', marginTop: 4 },
  catalogCard: { backgroundColor: '#fff', borderRadius: 35, padding: 15, borderWeight: 1, borderColor: '#f1f5f9', elevation: 2 }
});

export default VideoTutorial;