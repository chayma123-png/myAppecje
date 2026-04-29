import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function TableauDeBordScreen() {
  const router = useRouter();

  const chartData = {
    labels: ['S1', 'S2', 'S3', 'S4', 'S4'],
    datasets: [
      {
        data: [10, 12, 14, 13, 16],
        color: () => '#4A90D9',
        strokeWidth: 2,
      },
    ],
    legend: ['Tâches Complétées'],
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logoeceje.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="black" style={{ marginRight: 15 }} />
          <Ionicons name="menu" size={28} color="black" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* Back + Title */}
        <View style={styles.titleRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color="black" />
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Tableau de bord</Text>
        </View>

        {/* Search bar */}
        <View style={styles.searchSection}>
          <Feather name="search" size={18} color="#999" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="chercher..." placeholderTextColor="#999" />
        </View>

        {/* Date */}
        <Text style={styles.dateText}>Dimanche 22 Mars 2026</Text>

        {/* Task stats */}
        <View style={styles.statsBlock}>
          <View style={styles.statRow}>
            <Ionicons name="checkmark-circle" size={28} color="#2ECC71" />
            <Text style={styles.statLabel}>Tâches completées</Text>
            <Text style={styles.statNumber}>45</Text>
          </View>

          <View style={styles.statRow}>
            <MaterialCommunityIcons name="timer-sand" size={28} color="#E67E22" />
            <Text style={styles.statLabel}>Tâches en cours</Text>
            <Text style={styles.statNumber}>10</Text>
          </View>

          <View style={styles.statRow}>
            <Ionicons name="warning" size={28} color="#F1C40F" />
            <Text style={styles.statLabel}>Tâches en retard</Text>
            <Text style={styles.statNumber}>6</Text>
          </View>
        </View>

        {/* Chart */}
        <Text style={styles.sectionTitle}>Statistiques</Text>
        <View style={styles.chartCard}>
          <LineChart
            data={chartData}
            width={screenWidth - 80}
            height={160}
            chartConfig={{
              backgroundColor: '#FFFFFF',
              backgroundGradientFrom: '#FFFFFF',
              backgroundGradientTo: '#FFFFFF',
              decimalPlaces: 0,
              color: () => '#4A90D9',
              labelColor: () => '#999',
              propsForDots: {
                r: '4',
                strokeWidth: '2',
                stroke: '#4A90D9',
              },
              propsForBackgroundLines: {
                stroke: '#E8E8E8',
              },
            }}
            bezier
            style={{ borderRadius: 10 }}
            withInnerLines={true}
            withOuterLines={false}
            legend={chartData.legend}
          />
        </View>

        {/* Recent activities */}
        <Text style={styles.sectionTitle}>Activitées récentes</Text>
        <View style={styles.activityCard} />
        <View style={styles.activityCard} />

      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity>
            <Image
            source={require('../../assets/images/calen.png')}
            style={styles.navIcon}
            resizeMode="contain"
          /> 
        </TouchableOpacity>
        
        <TouchableOpacity>
           <Image
            source={require('../../assets/images/tache.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />       
        </TouchableOpacity>

        <TouchableOpacity>
           <Image
            source={require('../../assets/images/home.png')}
            style={[styles.navIcon, { width: 28, height: 28 }]}
            resizeMode="contain"
          />        
        </TouchableOpacity>

        <TouchableOpacity>
            <Image
              source={require('../../assets/images/projectman.png')}
              style={styles.navIcon}
               resizeMode="contain"
            />
        </TouchableOpacity>

        <TouchableOpacity>
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
  container: { flex: 1, backgroundColor: '#FFFFFF' },

  /* ── Header ── */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
  },
  logo: { width: 80, height: 40 },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },

  /* ── Content ── */
  content: { paddingHorizontal: 20, paddingBottom: 100 },

  /* ── Title row ── */
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 4,
  },
  backBtn: { marginRight: 8 },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },

  /* ── Search ── */
  searchSection: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 16,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: '#000' },

  /* ── Date ── */
  dateText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },

  /* ── Task stats ── */
  statsBlock: {
    marginBottom: 28,
    gap: 14,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statLabel: {
    flex: 1,
    fontSize: 15,
    color: '#000',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    minWidth: 30,
    textAlign: 'right',
  },

  /* ── Section title ── */
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },

  /* ── Chart ── */
  chartCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 12,
    marginBottom: 28,
    alignItems: 'center',
  },

  /* ── Activity cards ── */
  activityCard: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    height: 80,
    marginBottom: 14,
  },

  /* ── Tab bar ── */
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
});