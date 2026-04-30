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
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Les formations</Text>
      </View>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <TextInput placeholder="Rechercher..." style={styles.searchInput} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.trainingLabel}>SCRUM AGILE</Text>

          <Image
            source={require('../../assets/images/trainingImage.jpg')}
            style={styles.trainingImage}
            resizeMode="cover"
          />
        </View>
      </ScrollView>

      {/* ✅ NAV BAR FIXED (no external component) */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => router.push('/calendrier')}>
        <Image
            source={require('../../assets/images/calen.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/mestaches')}>
          <Text style={styles.icon}>📋</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/page2')}>
          <Text style={styles.icon}>🏠</Text>
        </TouchableOpacity>

    
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Text style={styles.icon}>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    padding: 15,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  searchBox: {
    backgroundColor: '#f0f0f0',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },

  searchInput: {
    fontSize: 14,
  },

  card: {
    margin: 15,
    padding: 15,
    backgroundColor: '#eee',
    borderRadius: 15,
  },

  trainingLabel: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  trainingImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#C60A0A',
    padding: 15,
  },

  icon: {
    fontSize: 22,
    color: 'white',
  },
});