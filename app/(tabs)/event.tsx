import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function EventsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar barStyle="dark-content" backgroundColor="#78b2a7" />

      <View style={styles.phone}>
        <View style={styles.topLabel}>
          <Text style={styles.topLabelText}>Events</Text>
        </View>

        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logoeceje.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="#111" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/menu')}>
              <Feather name="menu" size={30} color="#111" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.titleRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={22} color="#111" />
          </TouchableOpacity>

          <Text style={styles.title}>Événements</Text>
        </View>

        <View style={styles.searchBox}>
          <Feather name="search" size={28} color="#111" />

          <TextInput
            placeholder="chercher...."
            placeholderTextColor="#777"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.card}>
            <Text style={styles.eventTitle}>JET X PO</Text>

            <View style={styles.imageWrap}>
              <Image
                source={require('../../assets/images/jetxpo.png')}
                style={styles.eventImage}
                resizeMode="cover"
              />
            </View>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => router.push('/eventdetails')}
            >
              <Text style={styles.detailsText}>Voir détails</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

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
  page: {
    flex: 1,
    backgroundColor: '#78b2a7',
    alignItems: 'center',
  },

  phone: {
    width: '92%',
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 14,
  },

  topLabel: {
    height: 34,
    justifyContent: 'center',
  },

  topLabelText: {
    color: '#dcefeb',
    fontSize: 16,
    fontWeight: '700',
  },

  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: 76,
    height: 48,
  },

  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 2,
  },

  title: {
    fontSize: 23,
    color: '#111',
    fontWeight: '500',
  },

  searchBox: {
    height: 36,
    marginTop: 8,
    marginHorizontal: 8,
    backgroundColor: '#e9e9e9',
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 12,
  },

  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#111',
    paddingVertical: 0,
  },

  scrollContent: {
    paddingBottom: 95,
  },

  card: {
    marginTop: 18,
    backgroundColor: '#f5f5ff',
    borderRadius: 28,
    paddingTop: 14,
    paddingHorizontal: 14,
    paddingBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },

  eventTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#141414',
    marginBottom: 12,
  },

  imageWrap: {
    height: 250,
    borderRadius: 4,
    overflow: 'hidden',
  },

  eventImage: {
    width: '100%',
    height: '100%',
  },

  detailsButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },

  detailsText: {
    color: '#0067b8',
    fontSize: 15,
    fontWeight: '700',
  },

  tabBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#C62828',
    paddingVertical: 12,
    paddingBottom: Platform.OS === 'ios' ? 24 : 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 10,
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
