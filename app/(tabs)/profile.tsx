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

  const infoItems = [
    { label: 'Nom complet', value: 'Jean Dupont' },
    { label: 'Email', value: 'jean.dupont@email.com' },
    { label: 'Téléphone', value: '+216 XX XXX XXX' },
    { label: 'Rôle', value: 'Membre' },
    { label: 'Adhésion depuis', value: 'Janvier 2024' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/logoeceje.png')}
          style={styles.smallLogo}
          resizeMode="contain"
        />
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={60} color="#FFFFFF" />
          </View>
          <Text style={styles.userName}>Jean Dupont</Text>
          <Text style={styles.userRole}>Membre actif</Text>
        </View>

        {/* Infos */}
        <View style={styles.card}>
          {infoItems.map((item, index) => (
            <View
              key={index}
              style={[
                styles.infoRow,
                index < infoItems.length - 1 && styles.infoRowBorder,
              ]}
            >
              <Text style={styles.infoLabel}>{item.label}</Text>
              <Text style={styles.infoValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* Bouton Modifier */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>MODIFIER LE PROFIL</Text>
        </TouchableOpacity>

        {/* Bouton Déconnexion */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.push('/login')}
        >
          <Ionicons name="log-out-outline" size={20} color="#C41212" />
          <Text style={styles.logoutText}>Se déconnecter</Text>
        </TouchableOpacity>
      </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 10,
    height: 60,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E7EB',
  },
  smallLogo: {
    width: 100,
    height: 40,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 20,
  },

  // Avatar section
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#0A1128',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0A1128',
    marginBottom: 4,
  },
  userRole: {
    fontSize: 14,
    color: '#6B7280',
  },

  // Info card
  card: {
    width: '88%',
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  infoRowBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E7EB',
  },
  infoLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    color: '#0A1128',
    fontWeight: '600',
    maxWidth: '55%',
    textAlign: 'right',
  },

  // Buttons
  editButton: {
    backgroundColor: '#0A1128',
    width: '88%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  logoutText: {
    color: '#C41212',
    fontSize: 15,
    fontWeight: '600',
  },
});