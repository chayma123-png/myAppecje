import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function Page2Screen() {
  const router = useRouter();

  const cards = [
    { title: 'Mes tâches prioritaires', sub: '2 tâches', icon: null },
    { title: 'Date limite', sub: '', icon: 'timer-sand' },
    { title: 'Formation', sub: '1 formation', icon: 'lightbulb-outline' },
    { title: 'Événements', sub: '1 événement', icon: 'account-group-outline' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logoeceje.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="black" style={{ marginRight: 15 }} />
          <TouchableOpacity onPress={() => router.push('/(tabs)/menu')}>
            <Ionicons name="menu" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.searchSection}>
          <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="chercher..." />
        </View>

        <Text style={styles.welcomeText}>Bonjour Foulen !</Text>

        {cards.map((card, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardLeft}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              {card.sub !== '' && <Text style={styles.cardSub}>{card.sub}</Text>}
            </View>
            <View style={styles.cardRight}>
              {card.icon && (
                <MaterialCommunityIcons name={card.icon} size={30} color="#333" style={styles.cardIcon} />
              )}
              {/* Le lien vers les tâches reste identique */}
              <TouchableOpacity style={styles.voirPlus} onPress={() => router.push('/taches')}>
                <Text style={styles.voirPlusText}>voir plus</Text>
                <Ionicons name="caret-forward" size={16} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Barre de navigation */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => router.push('/calendar')}><Image source={require('../../assets/images/calen.png')} style={styles.navIcon} resizeMode="contain" /></TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/taches')}><Image source={require('../../assets/images/tache.png')} style={styles.navIcon} resizeMode="contain" /></TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/home')}><Image source={require('../../assets/images/home.png')} style={[styles.navIcon, { width: 28, height: 28 }]} resizeMode="contain" /></TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/settings')}><Image source={require('../../assets/images/projectman.png')} style={styles.navIcon} resizeMode="contain" /></TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/signup')}><Image source={require('../../assets/images/user.png')} style={styles.navIcon} resizeMode="contain" /></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // (styles identiques, pas de changement)
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, height: 60 },
  logo: { width: 90, height: 40 },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  content: { paddingHorizontal: 20, paddingBottom: 100 },
  searchSection: { flexDirection: 'row', backgroundColor: '#F0F0F0', borderRadius: 20, alignItems: 'center', paddingHorizontal: 15, height: 40, marginVertical: 20 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 14 },
  welcomeText: { fontSize: 26, fontWeight: 'bold', color: '#1A3050', marginBottom: 25 },
  card: { backgroundColor: '#E8E8E8', borderRadius: 20, padding: 20, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  cardLeft: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  cardSub: { fontSize: 14, color: '#666', marginTop: 5 },
  cardRight: { alignItems: 'flex-end', justifyContent: 'space-between' },
  cardIcon: { marginBottom: 10 },
  voirPlus: { flexDirection: 'row', alignItems: 'center' },
  voirPlusText: { fontSize: 14, fontWeight: '600', marginRight: 5 },
  tabBar: { position: 'absolute', bottom: 20, left: 20, right: 20, backgroundColor: '#C60A0A', height: 60, borderRadius: 30, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  navIcon: { width: 24, height: 24, tintColor: 'white' },
});