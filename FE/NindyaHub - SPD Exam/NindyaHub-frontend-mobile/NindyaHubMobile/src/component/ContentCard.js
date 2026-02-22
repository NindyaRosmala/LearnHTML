import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ContentCard = ({ title, category, description, thumbnail, type, updatedAt, onDetail }) => {
  const formattedDate = updatedAt 
    ? new Date(updatedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    : "17 Feb 2026";

  return (
    <TouchableOpacity style={styles.card} onPress={onDetail} activeOpacity={0.9}>
      {/* Thumbnail */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>

        <View style={styles.footer}>
          <View style={styles.dateContainer}>
            <Text style={styles.footerText}>📅 {formattedDate}</Text>
          </View>
          <Text style={styles.typeText}>{type?.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 24, marginBottom: 20, overflow: 'hidden', elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 },
  imageContainer: { width: '100%', height: 180, backgroundColor: '#f0f0f0' },
  thumbnail: { width: '100%', height: '100%', objectFit: 'cover' },
  categoryBadge: { position: 'absolute', top: 12, left: 12, backgroundColor: 'rgba(255,255,255,0.9)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10 },
  categoryText: { fontSize: 10, fontWeight: 'bold', color: '#3b82f6' },
  cardContent: { padding: 16 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#1e293b', marginBottom: 4 },
  description: { fontSize: 12, color: '#64748b', lineHeight: 18, marginBottom: 12 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#f1f5f9', paddingTop: 12 },
  footerText: { fontSize: 10, fontWeight: 'bold', color: '#94a3b8' },
  typeText: { fontSize: 10, fontWeight: '900', color: '#3b82f6', fontStyle: 'italic' }
});

export default ContentCard;