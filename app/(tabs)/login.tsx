import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Modal,
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

const NAV_ROUTES = ['/calendar', '/taches', '/home', '/settings', '/profile'];

const INITIAL_TASKS = {
  afaire: [
    { id: 1, title: 'Presentation de projet', date: "Aujourd'hui 5pm", priority: 'élevée', priorityColor: RED },
    { id: 2, title: 'Design UX', date: 'Demain 12am', priority: 'moyenne', priorityColor: '#d4a800' },
  ],
  encours: [
    { id: 3, title: 'Développement API', date: 'Vendredi 3pm', priority: 'élevée', priorityColor: RED },
  ],
  terminees: [
    { id: 4, title: 'Réunion équipe', date: 'Hier', priority: 'faible', priorityColor: '#27ae60' },
    { id: 5, title: 'Rapport mensuel', date: 'Lundi', priority: 'moyenne', priorityColor: '#d4a800' },
  ],
};

const STATS = [
  { key: 'afaire',    label: 'A faire',   icon: '!', iconColor: RED,       iconBg: '#cdb7b7' },
  { key: 'encours',   label: 'En cours',  icon: '↻', iconColor: '#888',    iconBg: '#e8e8e8' },
  { key: 'terminees', label: 'Terminées', icon: '✓', iconColor: '#27ae60', iconBg: '#e6f9ee' },
];

export default function TachesScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('afaire');
  const [activeNav, setActiveNav] = useState(1);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newPriority, setNewPriority] = useState('moyenne');

  const filteredTasks = (tasks[activeTab] ?? []).filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddTask = () => {
    if (!newTitle.trim()) return;
    const priorityColor =
      newPriority === 'élevée' ? RED :
      newPriority === 'moyenne' ? '#d4a800' : '#27ae60';

    const newTask = {
      id: Date.now(),
      title: newTitle,
      date: newDate || 'Sans date',
      priority: newPriority,
      priorityColor,
    };

    setTasks(prev => ({
      ...prev,
      afaire: [newTask, ...prev.afaire],
    }));
    setNewTitle('');
    setNewDate('');
    setNewPriority('moyenne');
    setModalVisible(false);
  };

  const handleDeleteTask = (id) => {
    setTasks(prev => ({
      ...prev,
      [activeTab]: prev[activeTab].filter(t => t.id !== id),
    }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={BG} />

      {/* TOP BAR */}
      <View style={styles.topBar}>
        <Image
          source={require('../../assets/images/logoeceje.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.topBarIcons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.topBarIcon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconBtn, { marginLeft: 14 }]}
            onPress={() => router.push('/menu')}
          >
            <Text style={styles.topBarIcon}>☰</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SEARCH */}
      <View style={styles.searchWrap}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="chercher..."
            placeholderTextColor="#a0a5b5"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      {/* BACK */}
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleRow}>
          <Text style={styles.pageTitle}>Mes Tâches</Text>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.addBtnText}>+ Ajouter</Text>
          </TouchableOpacity>
        </View>

        {/* STAT TABS */}
        <View style={styles.statRow}>
          {STATS.map(s => (
            <TouchableOpacity
              key={s.key}
              style={[styles.statCard, activeTab === s.key && styles.statCardActive]}
              onPress={() => setActiveTab(s.key)}
              activeOpacity={0.8}
            >
              <Text style={[styles.statLabel, activeTab === s.key && styles.statLabelActive]}>
                {s.label}
              </Text>
              <View style={[
                styles.statIconCircle,
                { backgroundColor: activeTab === s.key ? RED : s.iconBg },
              ]}>
                <Text style={[styles.statIcon, { color: activeTab === s.key ? WHITE : s.iconColor }]}>
                  {s.icon}
                </Text>
              </View>
              <Text style={[styles.statCount, activeTab === s.key && styles.statCountActive]}>
                {tasks[s.key]?.length ?? 0}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* TASK LIST */}
        <Text style={styles.sectionTitle}>
          {STATS.find(s => s.key === activeTab)?.label} ({filteredTasks.length})
        </Text>

        {filteredTasks.length > 0 ? (
          filteredTasks.map((t, i) => (
            <View
              key={t.id}
              style={[styles.taskCard, i > 0 && styles.taskCardSpacing]}
            >
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{t.title}</Text>
                <Text style={styles.taskDate}>{t.date}</Text>
              </View>
              <View style={[styles.priorityBadge, { backgroundColor: t.priorityColor }]}>
                <Text style={styles.priorityText}>priorité {t.priority}</Text>
              </View>
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => handleDeleteTask(t.id)}
              >
                <Text style={styles.deleteBtnText}>✕</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>Aucune tâche</Text>
          </View>
        )}

        <View style={{ height: 24 }} />
      </ScrollView>

      {/* MODAL AJOUT */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Nouvelle Tâche</Text>

            <Text style={styles.modalLabel}>Titre</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Titre de la tâche"
              placeholderTextColor="#999"
              value={newTitle}
              onChangeText={setNewTitle}
            />

            <Text style={styles.modalLabel}>Date</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="ex: Demain 3pm"
              placeholderTextColor="#999"
              value={newDate}
              onChangeText={setNewDate}
            />

            <Text style={styles.modalLabel}>Priorité</Text>
            <View style={styles.priorityRow}>
              {['faible', 'moyenne', 'élevée'].map(p => (
                <TouchableOpacity
                  key={p}
                  style={[
                    styles.priorityOption,
                    newPriority === p && styles.priorityOptionActive,
                  ]}
                  onPress={() => setNewPriority(p)}
                >
                  <Text style={[
                    styles.priorityOptionText,
                    newPriority === p && styles.priorityOptionTextActive,
                  ]}>
                    {p}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelBtnText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmBtn}
                onPress={handleAddTask}
              >
                <Text style={styles.confirmBtnText}>Ajouter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        {['📅', '📋', '🏠', '⚙️', '👤'].map((icon, i) => (
          <TouchableOpacity
            key={i}
            style={styles.navItem}
            onPress={() => {
              setActiveNav(i);
              router.push(NAV_ROUTES[i]);
            }}
            activeOpacity={0.7}
          >
            <Text style={[styles.navIcon, { opacity: activeNav === i ? 1 : 0.75 }]}>
              {icon}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: BG },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: BG,
  },
  logo: { width: 90, height: 50 },
  topBarIcons: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { padding: 4 },
  topBarIcon: { fontSize: 20 },
  searchWrap: { paddingHorizontal: 16, paddingVertical: 6 },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  searchIcon: { fontSize: 13, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 13, color: NAVY, padding: 0 },
  backBtn: { paddingHorizontal: 16, paddingBottom: 4 },
  backIcon: { fontSize: 20, color: NAVY, fontWeight: '600' },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 16, paddingTop: 8 },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  pageTitle: { fontSize: 24, fontWeight: '800', color: NAVY },
  addBtn: {
    backgroundColor: RED,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addBtnText: { color: WHITE, fontWeight: '700', fontSize: 13 },
  statRow: { flexDirection: 'row', marginBottom: 8 },
  statCard: {
    flex: 1,
    backgroundColor: WHITE,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: CARD_BORDER,
    marginRight: 8,
  },
  statCardActive: { backgroundColor: NAVY, borderColor: NAVY },
  statLabel: { fontSize: 12, fontWeight: '700', color: NAVY, textAlign: 'center', marginBottom: 6 },
  statLabelActive: { color: WHITE },
  statIconCircle: {
    width: 28, height: 28, borderRadius: 14,
    alignItems: 'center', justifyContent: 'center', marginBottom: 6,
  },
  statIcon: { fontSize: 14, fontWeight: '800' },
  statCount: { fontSize: 20, fontWeight: '800', color: NAVY },
  statCountActive: { color: WHITE },
  sectionTitle: { fontSize: 16, fontWeight: '800', color: NAVY, marginTop: 14, marginBottom: 10 },
  taskCard: {
    backgroundColor: WHITE,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: CARD_BORDER,
  },
  taskCardSpacing: { marginTop: 8 },
  taskInfo: { flex: 1, marginRight: 10 },
  taskTitle: { fontSize: 13, fontWeight: '800', color: NAVY },
  taskDate: { fontSize: 11, color: '#888', marginTop: 2 },
  priorityBadge: { borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4 },
  priorityText: { color: WHITE, fontSize: 10, fontWeight: '700' },
  deleteBtn: { marginLeft: 8, padding: 4 },
  deleteBtnText: { color: '#ccc', fontSize: 16, fontWeight: '700' },
  emptyBox: {
    backgroundColor: WHITE,
    borderRadius: 14,
    height: 180,
    borderWidth: 1,
    borderColor: CARD_BORDER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: { color: '#aaa', fontSize: 14 },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: WHITE,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  modalTitle: { fontSize: 20, fontWeight: '800', color: NAVY, marginBottom: 16 },
  modalLabel: { fontSize: 14, fontWeight: '700', color: NAVY, marginBottom: 6, marginTop: 10 },
  modalInput: {
    backgroundColor: BG,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: NAVY,
  },
  priorityRow: { flexDirection: 'row', gap: 8, marginTop: 4 },
  priorityOption: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: BG,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: CARD_BORDER,
  },
  priorityOptionActive: { backgroundColor: NAVY, borderColor: NAVY },
  priorityOptionText: { fontSize: 13, fontWeight: '600', color: NAVY },
  priorityOptionTextActive: { color: WHITE },
  modalButtons: { flexDirection: 'row', gap: 12, marginTop: 24 },
  cancelBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: BG,
    alignItems: 'center',
  },
  cancelBtnText: { color: NAVY, fontWeight: '700' },
  confirmBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: RED,
    alignItems: 'center',
  },
  confirmBtnText: { color: WHITE, fontWeight: '700' },

  // Bottom Nav
  bottomNav: {
    backgroundColor: RED,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  navItem: { alignItems: 'center', justifyContent: 'center', padding: 4 },
  navIcon: { fontSize: 24 },
});