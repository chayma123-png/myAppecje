import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function FormationsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logoeceje.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/menu')}>
            <Ionicons name="menu" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Back + Title */}
        <View style={styles.titleRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color="black" />
          </TouchableOpacity>

          <Text style={styles.pageTitle}>Les formations</Text>
        </View>

        {/* Search bar */}
        <View style={styles.searchSection}>
          <Feather name="search" size={18} color="#999" style={styles.searchIcon} />

          <TextInput
            style={styles.searchInput}
            placeholder="chercher..."
            placeholderTextColor="#999"
          />
        </View>

        {/* Formation card */}
        <View style={styles.card}>
          <Text style={styles.trainingLabel}>SCRUM AGILE</Text>

          <Image
            source={require('../../assets/images/jetxpo.jpg')}
            style={styles.trainingImage}
            resizeMode="cover"
          />

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsText}>Voir détails</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => router.push('/calendrier')}>
          <Image
            source={require('../../assets/images/calen.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/mestaches')}>
          <Image
            source={require('../../assets/images/tache.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/page2')}>
          <Image
            source={require('../../assets/images/home.png')}
            style={[styles.navIcon, styles.homeIcon]}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/settings')}>
          <Image
            source={require('../../assets/images/projectman.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Image
            source={require('../../assets/images/user.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
  },

  logo: {
    width: 80,
    height: 40,
  },

  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 4,
  },

  backBtn: {
    marginRight: 8,
  },

  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },

  searchSection: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 22,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    padding: 0,
  },

  card: {
    backgroundColor: '#F7F7FF',
    borderRadius: 22,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  trainingLabel: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
    marginBottom: 12,
  },

  trainingImage: {
    width: '100%',
    height: 190,
    borderRadius: 12,
    backgroundColor: '#ddd',
  },

  detailsButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },

  detailsText: {
    color: '#0067B8',
    fontSize: 15,
    fontWeight: '700',
  },

  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#C41212',
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navIcon: {
    width: 26,
    height: 26,
    tintColor: '#fff',
  },

  homeIcon: {
    width: 28,
    height: 28,
  },
});
