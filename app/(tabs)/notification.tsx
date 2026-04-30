import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
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

type NotifType = 'rappel' | 'tache' | 'deadline' | 'nouvelle';

interface Notification {
  id: number;
  type: NotifType;
  titre: string;
  message: string;
  lu: boolean;
}

const NOTIFICATIONS_INIT: Notification[] = [
  {
    id: 1,
    type: 'rappel',
    titre: 'Rappel : préparation d\'événement',
    message: 'La tâche "préparation d\'événement" doit être terminée avant le 15 janvier',
    lu: false,
  },
  {
    id: 2,
    type: 'tache',
    titre: 'Tâche terminée :',
    message: 'Oussama a terminé la tâche "Révision du code"',
    lu: false,
  },
  {
    id: 3,
    type: 'deadline',
    titre: 'Rappel du deadline :',
    message: 'Tâche rédaction du rapport',
    lu: false,
  },
  {
    id: 4,
    type: 'nouvelle',
    titre: 'Nouvelle tâche:',
    message: 'Une nouvelle tâche vous a été assignée. "Collecte de données"',
    lu: false,
  },
];

// Updated NotifIcon using Ionicons
function NotifIcon({ type }: { type: NotifType }) {
  const configs: Record<NotifType, { icon: keyof typeof Ionicons.glyphNames; color: string }> = {
    rappel:   { icon: 'calendar-outline' as const, color: '#BDBDBD' },
    tache:    { icon: 'checkmark-circle-outline' as const, color: '#E53935' },
    deadline: { icon: 'time-outline' as const, color: '#E53935' },
    nouvelle: { icon: 'add-circle-outline' as const, color: '#BDBDBD' },
  };
  
  const { icon, color } = configs[type];
  
  return (
    <View style={[iconStyles.wrap, { borderColor: color }]}>
      <Ionicons name={icon} size={24} color={color} />
    </View>
  );
}

const iconStyles = StyleSheet.create({
  wrap: {
    width: 48,
    height: 48,
    borderRadius: 10,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
});

export default function NotificationsPage() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [notifications, setNotifications] = useState<Notification[]>(NOTIFICATIONS_INIT);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, lu: true })));
  };

  const filtered = notifications.filter(
    (n) =>
      n.titre.toLowerCase().includes(search.toLowerCase()) ||
      n.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* HEADER - Updated with Ionicons */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logoeceje.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="menu" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* PAGE TITLE */}
      <View style={styles.pageTitleRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Notifications</Text>
      </View>

      {/* SEARCH - Updated with Ionicons */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="chercher...."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* CONTENT */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* TOUT MARQUER COMME LU */}
        <View style={styles.markAllRow}>
          <TouchableOpacity style={styles.markAllBtn} onPress={markAllRead}>
            <Text style={styles.markAllText}>Tout marquer comme lu</Text>
          </TouchableOpacity>
        </View>

        {/* NOTIFICATION CARDS */}
        {filtered.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="notifications-off-outline" size={64} color="#DDD" />
            <Text style={styles.emptyText}>Aucune notification trouvée.</Text>
          </View>
        ) : (
          filtered.map((notif) => (
            <View
              key={notif.id}
              style={[styles.card, notif.lu && styles.cardLu]}
            >
              {!notif.lu && <View style={styles.unreadDot} />}
              <NotifIcon type={notif.type} />
              <View style={styles.cardContent}>
                <Text style={[styles.cardTitle, notif.lu && styles.cardTitleLu]}>
                  {notif.titre}
                </Text>
                <Text style={styles.cardMessage}>{notif.message}</Text>
              </View>
            </View>
          ))
        )}

        <View style={{ height: 20 }} />
      </ScrollView>

      {/* TAB BAR - Keep image icons as they match your design */}
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
            style={[styles.navIcon, { width: 28, height: 28 }]}
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
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F4F4',
  },

  /* ── HEADER ── */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  logo: { width: 80, height: 36 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBtn: { padding: 4 },

  /* ── PAGE TITLE ── */
  pageTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 8,
    backgroundColor: '#F0F4F4',
    gap: 10,
  },
  pageTitle: { fontSize: 22, fontWeight: '800', color: '#111' },

  /* ── SEARCH ── */
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 10 : 6,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: '#333', padding: 0 },

  /* ── SCROLL ── */
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 14, paddingTop: 4 },

  /* ── MARK ALL ── */
  markAllRow: {
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  markAllBtn: {
    backgroundColor: '#1A237E',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 16,
  },
  markAllText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },

  /* ── NOTIFICATION CARD ── */
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 2,
  },
  cardLu: {
    opacity: 0.65,
  },
  unreadDot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E53935',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111',
    marginBottom: 4,
    lineHeight: 20,
  },
  cardTitleLu: {
    color: '#888',
    fontWeight: '600',
  },
  cardMessage: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },

  /* ── EMPTY STATE ── */
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 15,
    color: '#999',
    marginTop: 12,
  },

  /* ── TAB BAR ── */
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
});