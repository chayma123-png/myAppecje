import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ProjetScreen() {
  const router = useRouter();

  const projects = [
    {
      title: 'Projet 1:App mobile',
      responsable: 'Responsable projet',
      equipe: '5 membres',
      debut: '10 Janvier 2026',
      deadline: '30 Mars 2026',
      status: 'En cours',
      statusColor: '#F4C430',
      progression: '65%',
      description:
        "Développement d'une application d’apprentissage en ligne avec gestion des cours et utilisateurs.",
    },
    {
      title: 'Projet 2:App mobile',
      responsable: 'Responsable projet',
      equipe: '7 membres',
      debut: '01 Février 2026',
      deadline: '15 Avril 2026',
      status: 'En retard',
      statusColor: '#E00000',
      progression: '40%',
      description:
        "Création d’une application mobile sécurisée pour les services bancaires.",
    },
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
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={23} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/menu')}>
            <Feather name="menu" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.titleRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={21} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Les projets</Text>
      </View>

      <View style={styles.searchBox}>
        <Feather name="search" size={28} color="#000" />
        <TextInput
          placeholder="Rechercher un projet"
          placeholderTextColor="#9A9A9A"
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.sectionTitle}>Liste des projets</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {projects.map((project, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.projectTitle}>{project.title}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.cardBody}>
              <Text style={styles.infoText}>
                Responsable : {project.responsable}
              </Text>
              <Text style={styles.infoText}>Équipe : {project.equipe}</Text>
              <Text style={styles.infoText}>Date de début : {project.debut}</Text>
              <Text style={styles.infoText}>Deadline : {project.deadline}</Text>

              <View style={styles.statusRow}>
                <Text style={styles.infoText}>Statut : </Text>
                <View
                  style={[
                    styles.statusDot,
                    { backgroundColor: project.statusColor },
                  ]}
                />
                <Text style={styles.infoText}> {project.status}</Text>
              </View>

              <Text style={styles.infoText}>Progression : {project.progression}</Text>

              <Text style={styles.infoText}>
                Description : {project.description}
              </Text>

              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsText}>Voir détails</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/calendrier')}>
          <Feather name="calendar" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/mestaches')}>
          <Ionicons name="clipboard-outline" size={25} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/accueil')}>
          <AntDesign name="home" size={25} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/formation')}>
          <MaterialCommunityIcons name="head-cog-outline" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/profile')}>
          <Feather name="user" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
  },

  header: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: 74,
    height: 38,
  },

  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginTop: 2,
  },

  title: {
    fontSize: 25,
    fontWeight: '400',
    color: '#000',
  },

  searchBox: {
    width: '78%',
    height: 54,
    marginTop: 12,
    marginLeft: 23,
    borderRadius: 28,
    backgroundColor: '#EAEAEA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  searchInput: {
    flex: 1,
    marginLeft: 9,
    fontSize: 12,
    color: '#000',
    paddingVertical: 0,
  },

  sectionTitle: {
    marginTop: 12,
    marginLeft: 29,
    fontSize: 15,
    fontWeight: '800',
    color: '#000',
  },

  scrollContent: {
    paddingTop: 18,
    paddingBottom: 80,
    alignItems: 'center',
  },

  card: {
    width: '88%',
    minHeight: 210,
    backgroundColor: '#F7F7FF',
    borderRadius: 28,
    marginBottom: 32,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 6,
  },

  cardHeader: {
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
  },

  projectTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#000',
  },

  divider: {
    height: 1,
    backgroundColor: '#9C9C9C',
  },

  cardBody: {
    paddingHorizontal: 25,
    paddingTop: 21,
    paddingBottom: 14,
  },

  infoText: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '800',
    color: '#000',
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  detailsButton: {
    alignSelf: 'flex-end',
    marginTop: 13,
  },

  detailsText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#006DBA',
  },

  bottomNav: {
    position: 'absolute',
    left: 33,
    right: 33,
    bottom: 12,
    height: 39,
    borderRadius: 22,
    backgroundColor: '#D90000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  navItem: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
