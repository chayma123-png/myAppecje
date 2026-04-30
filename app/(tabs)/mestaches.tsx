import { useRouter } from 'expo-router';
import React, { useState } from 'react';
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

const RED = '#c0392b';
const NAVY = '#1a2340';
const BG = '#f4f5f8';
const WHITE = '#fff';
const CARD_BORDER = '#e0e3ea';

const STATS = [
  { key: 'afaire', label: 'A faire', count: 5, icon: '!' },
  { key: 'encours', label: 'En cours', count: 5, icon: '↻' },
  { key: 'terminees', label: 'Terminées', count: 7, icon: '✓' },
];

const TASKS = [
  { id: 1, title: 'presentation de projet', date: "Aujourd'hui 5pm", priority: 'élevée', priorityColor: RED },
  { id: 2, title: 'design ux', date: 'Demain 12am', priority: 'moyenne', priorityColor: '#d4a800' },
];

export default function MesTachesScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('afaire');

  const filteredTasks = TASKS.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={BG} />

      {/* HEADER */}
      <View style={styles.topBar}>
        <Image source={require('../../assets/images/logoeceje.png')} style={styles.logo} />
      </View>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="chercher..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Mes tâches</Text>

        {/* STATS */}
        <View style={styles.statRow}>
          {STATS.map(s => (
            <TouchableOpacity
              key={s.key}
              style={[styles.statCard, activeTab === s.key && styles.statActive]}
              onPress={() => setActiveTab(s.key)}
            >
              <Text style={styles.statText}>{s.label}</Text>
              <Text>{s.count}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* TASKS */}
        {filteredTasks.map(t => (
          <View key={t.id} style={styles.taskCard}>
            <View>
              <Text style={styles.taskTitle}>{t.title}</Text>
              <Text style={styles.taskDate}>{t.date}</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: t.priorityColor }]}>
              <Text style={{ color: '#fff' }}>{t.priority}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* NAV BAR */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => router.push('/calendrier')}>
          <Image source={require('../../assets/images/calen.png')} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/mestaches')}>
          <Image source={require('../../assets/images/tache.png')} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/page2')}>
          <Image source={require('../../assets/images/home.png')} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/settings')}>
          <Image source={require('../../assets/images/projectman.png')} style={styles.navIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Image source={require('../../assets/images/user.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: BG },

  topBar: {
    alignItems: 'center',
    padding: 10,
  },

  logo: {
    width: 100,
    height: 50,
  },

  searchBox: {
    backgroundColor: WHITE,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },

  searchInput: {
    fontSize: 14,
  },

  scrollContent: {
    padding: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: NAVY,
    marginBottom: 10,
  },

  statRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  statCard: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 10,
    marginRight: 5,
    borderRadius: 10,
    alignItems: 'center',
  },

  statActive: {
    backgroundColor: NAVY,
  },

  statText: {
    color: '#000',
  },

  taskCard: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  taskTitle: {
    fontWeight: 'bold',
  },

  taskDate: {
    color: '#777',
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: RED,
    padding: 10,
  },

  navIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
});