import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
    Image,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function EventDetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logoeceje.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={23} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/menu')}>
            <Feather name="menu" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Feather name="arrow-left" size={20} color="#000" />
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <Feather name="search" size={27} color="#000" />
        <TextInput
          placeholder="chercher...."
          placeholderTextColor="#8D8D8D"
          style={styles.searchInput}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.card}>
          <Text style={styles.eventTitle}>JET X PO</Text>

          <View style={styles.contentRow}>
            <Text style={styles.quoteText}>
              "Un événement pour apprendre, partager et vivre une expérience unique avec des
              personnes passionnées."
            </Text>

            <Image
              source={require('../../assets/images/jetxpo.png')}
              style={styles.eventImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.infoText}>Lieu : [à compléter]</Text>
            <Text style={styles.infoText}>Date : [à compléter]</Text>
            <Text style={styles.infoText}>Public : Étudiants & passionnés</Text>
            <Text style={styles.infoText}>Objectif : Apprendre, réseauter, créer</Text>
          </View>
        </View>
      </ScrollView>

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
    paddingHorizontal: 8,
  },

  header: {
    height: 41,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: 70,
    height: 36,
  },

  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },

  backButton: {
    marginTop: 6,
    width: 24,
    height: 24,
    justifyContent: 'center',
  },

  searchBox: {
    width: '86%',
    height: 35,
    marginTop: 18,
    marginLeft: 8,
    borderRadius: 20,
    backgroundColor: '#EAEAEA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 11,
    color: '#000',
    paddingVertical: 0,
  },

  scrollContent: {
    paddingTop: 18,
    paddingBottom: 95,
  },

  card: {
    width: '100%',
    minHeight: 263,
    backgroundColor: '#F7F7FF',
    borderRadius: 27,
    paddingHorizontal: 13,
    paddingTop: 15,
    paddingBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 6,
  },

  eventTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#000',
    marginBottom: 27,
  },

  contentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  quoteText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 18,
    color: '#000',
    marginRight: 8,
  },

  eventImage: {
    width: 103,
    height: 101,
  },

  infoBlock: {
    marginTop: 24,
  },

  infoText: {
    fontSize: 15,
    lineHeight: 17,
    color: '#000',
  },

  tabBar: {
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
