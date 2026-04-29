import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>

        <Image
          source={require('../../assets/images/logoeceje.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.headerRight}>
          <Ionicons name="notifications-outline" size={24} color="black" style={{ marginRight: 15 }} />
          <Ionicons name="menu" size={28} color="black" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* AVATAR */}
        <View style={styles.avatarCircle}>
          <Ionicons name="person-outline" size={70} color="#C41212" />
        </View>

        <Text style={styles.name}>Foulen EL Fouleni</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>Membre junior</Text>
        </View>

        {/* CARD INFO */}
        <View style={styles.card}>

          <View style={styles.row}>
            <Ionicons name="person-outline" size={22} color="#444" />
            <View style={styles.textBlock}>
              <Text style={styles.label}>Nom et Prenom</Text>
              <Text style={styles.value}>Foulen EL Fouleni</Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.row}>
            <Ionicons name="mail-outline" size={22} color="#444" />
            <View style={styles.textBlock}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>foulen@gmail.com</Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.row}>
            <Ionicons name="call-outline" size={22} color="#444" />
            <View style={styles.textBlock}>
              <Text style={styles.label}>Téléphone</Text>
              <Text style={styles.value}>+216 53 444 333</Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.row}>
            <Ionicons name="location-outline" size={22} color="#444" />
            <View style={styles.textBlock}>
              <Text style={styles.label}>Cité</Text>
              <Text style={styles.value}>Sfax</Text>
            </View>
          </View>

        </View>

        {/* BUTTONS */}
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Editer le Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Activer mode sombre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/login')}
          style={styles.logout}
        >
          <Ionicons name="log-out-outline" size={22} color="red" />
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => router.push('/calendar')}>
          <Ionicons name="calendar-outline" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/taches')}>
          <Ionicons name="list-outline" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/page2')}>
          <Ionicons name="home" size={26} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/settings')}>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Ionicons name="person" size={24} color="white" />
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  logo: { width: 120, height: 50 },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  scrollContent: {
    alignItems: 'center',
    paddingBottom: 120,
  },

  avatarCircle: {
    marginTop: 20,
    width: 110,
    height: 110,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#C41212',
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
  },

  badge: {
    backgroundColor: '#DFF3EE',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 8,
  },

  badgeText: {
    color: '#2A9D8F',
    fontWeight: '600',
  },

  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  textBlock: {
    marginLeft: 12,
  },

  label: {
    fontSize: 13,
    color: '#777',
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
  },

  line: {
    height: 1,
    backgroundColor: '#eee',
  },

  buttonPrimary: {
    backgroundColor: '#0A1128',
    width: '90%',
    padding: 14,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
  },

  buttonSecondary: {
    backgroundColor: '#0A1128',
    width: '90%',
    padding: 14,
    borderRadius: 25,
    marginTop: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  logoutText: {
    color: 'red',
    marginLeft: 5,
    fontWeight: '600',
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#C60A0A',
    paddingVertical: 14,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});