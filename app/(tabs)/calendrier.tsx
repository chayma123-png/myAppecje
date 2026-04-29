import { useRouter } from 'expo-router';
import {
  ArrowLeft,
  Bell,
  ClipboardList,
  Home,
  Images,
  Lightbulb,
  Menu,
  Search,
  User
} from 'lucide-react-native';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

const CalendarScreen = () => {
  const router = useRouter();
  const [selected, setSelected] = useState('2023-05-18');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft color="black" size={24} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Calendrier</Text>

        <View style={styles.headerIcons}>
          <Bell color="black" size={24} style={{ marginRight: 15 }} />
          <TouchableOpacity onPress={() => router.push(('/menu'))}>
            <Menu color="black" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search bar */}w
        <View style={styles.searchContainer}>
          <Search color="#888" size={20} style={styles.searchIcon} />
          <TextInput
            placeholder="chercher..."
            style={styles.searchInput}
            placeholderTextColor="#888"
          />
        </View>

        {/* Calendar card */}
        <View style={styles.calendarCard}>
          <Calendar
            onDayPress={(day) => setSelected(day.dateString)}
            markedDates={{
              [selected]: { selected: true, disableTouchEvent: true },
            }}
            theme={{
              selectedDayBackgroundColor: '#414BB2',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#414BB2',
              arrowColor: '#888',
              monthTextColor: 'black',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '600',
              dayTextColor: '#2d4150',
            }}
          />
        </View>

        {/* Tasks */}
        <View style={styles.tasksContainer}>
          <TaskSection color="red" title="Aujourd'hui" tasks={['Présentation projet']} />
          <TaskSection color="#FFD700" title="Demain" tasks={['Développement Frontend']} />
          <TaskSection color="#00C851" title="Cette semaine" tasks={['Tests & validation', 'Base de données']} />
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/calendrier')}>
          <Images
            source={require('../../assets/images/calen.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />       
         </TouchableOpacity>

        <TouchableOpacity >
          <ClipboardList color="white" size={26} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Home color="white" size={26} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Lightbulb color="white" size={26} />
        </TouchableOpacity>

        <TouchableOpacity>
          <User color="white" size={26} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const TaskSection = ({ color, title, tasks }: { color: string; title: string; tasks: string[] }) => (
  <View style={styles.sectionWrapper}>
    <View style={styles.sectionHeader}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    {tasks.map((task, index) => (
      <Text key={index} style={styles.taskItem}>
        - {task}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    marginHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 45,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  calendarCard: {
    marginHorizontal: 15,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#3FA9FF',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tasksContainer: {
    backgroundColor: '#F7F8FC',
    margin: 20,
    borderRadius: 20,
    padding: 20,
    paddingBottom: 40,
  },
  sectionWrapper: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskItem: {
    fontSize: 15,
    color: '#555',
    marginLeft: 22,
    marginTop: 2,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#BD0000',
    height: 70,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
});

export default CalendarScreen;