import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const VideoDetail = ({ video, onBack }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Kembali */}
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>← KEMBALI</Text>
        </TouchableOpacity>

        {/* Video Player Placeholder (Sesuai desain Web kamu) */}
        <View style={styles.videoPlayer}>
          <Image source={{ uri: video.thumbnail }} style={styles.mainThumbnail} />
          <View style={styles.overlay}>
             <TouchableOpacity style={styles.playButton}>
                <Text style={styles.playIcon}>▶</Text>
             </TouchableOpacity>
          </View>
        </View>

        {/* Detail Info */}
        <View style={styles.infoContent}>
          <View style={styles.metaRow}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{video.category.toUpperCase()}</Text>
            </View>
            <Text style={styles.dateText}>📅 17 FEB 2026</Text>
          </View>

          <Text style={styles.videoTitle}>{video.title}</Text>
          <Text style={styles.videoDesc}>{video.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  backButton: { padding: 20 },
  backText: { fontSize: 12, fontWeight: 'bold', color: '#64748b' },
  videoPlayer: { 
    width: '90%', 
    aspectRatio: 16/9, 
    backgroundColor: '#0f172a', 
    alignSelf: 'center', 
    borderRadius: 35, 
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#fff',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3
  },
  mainThumbnail: { width: '100%', height: '100%', opacity: 0.6 },
  overlay: { ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center' },
  playButton: { 
    width: 70, height: 70, backgroundColor: '#3b82f6', 
    borderRadius: 35, justifyContent: 'center', alignItems: 'center',
    paddingLeft: 5, shadowColor: '#3b82f6', shadowOpacity: 0.5, elevation: 8
  },
  playIcon: { color: '#fff', fontSize: 24 },
  infoContent: { padding: 25 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 15, marginBottom: 15 },
  categoryBadge: { backgroundColor: 'rgba(59, 130, 246, 0.1)', paddingHorizontal: 15, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(59, 130, 246, 0.2)' },
  categoryText: { fontSize: 10, fontWeight: '900', color: '#3b82f6' },
  dateText: { fontSize: 11, color: '#94a3b8', fontWeight: 'bold' },
  videoTitle: { fontSize: 32, fontWeight: '900', color: '#1e293b', lineHeight: 38, marginBottom: 10 },
  videoDesc: { fontSize: 14, color: '#64748b', lineHeight: 22, fontWeight: '500' }
});

export default VideoDetail;