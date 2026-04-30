import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
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
} from "react-native";

export default function MesTachesPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const tasks = {
    aFaire: 5,
    enCours: 5,
    terminees: 7,
  };

  const upcomingTasks = [
    {
      id: 1,
      title: "Présentation de projet",
      date: "Aujourd'hui 5 pm",
      priority: "Priorité élevée",
      priorityColor: "#E53935",
    },
    {
      id: 2,
      title: "Design UX",
      date: "Demain 12 am",
      priority: "Priorité moyenne",
      priorityColor: "#F9A825",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logoeceje.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => router.push("/(tabs)/menu")}
          >
            <Ionicons
              name="menu"
              size={28}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* BACK BUTTON */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        {/* SEARCH BAR */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="chercher..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* GREETING */}
        <Text style={styles.greeting}>Bonjour Foulen !</Text>

        {/* MES TÂCHES */}
        <Text style={styles.sectionTitle}>Mes tâches</Text>

        <View style={styles.taskCardsRow}>
          {/* A faire */}
          <View style={styles.taskCard}>
            <View
              style={[
                styles.taskIconCircle,
                { backgroundColor: "#E53935" },
              ]}
            >
              <Text style={styles.taskIconText}>!</Text>
            </View>

            <Text style={styles.taskCardLabel}>À faire</Text>
            <Text style={styles.taskCardCount}>
              {tasks.aFaire}
            </Text>
          </View>

          {/* En cours */}
          <View style={styles.taskCard}>
            <View
              style={[
                styles.taskIconCircle,
                { backgroundColor: "#1565C0" },
              ]}
            >
              <Text style={styles.taskIconText}>⟳</Text>
            </View>

            <Text style={styles.taskCardLabel}>En cours</Text>
            <Text style={styles.taskCardCount}>
              {tasks.enCours}
            </Text>
          </View>

          {/* Terminées */}
          <View style={styles.taskCard}>
            <View
              style={[
                styles.taskIconCircle,
                { backgroundColor: "#2E7D32" },
              ]}
            >
              <Text style={styles.taskIconText}>✓</Text>
            </View>

            <Text style={styles.taskCardLabel}>Terminées</Text>
            <Text style={styles.taskCardCount}>
              {tasks.terminees}
            </Text>
          </View>
        </View>

        {/* TÂCHES À VENIR */}
        <Text style={styles.sectionTitle}>Tâches à venir</Text>

        {upcomingTasks.map((task) => (
          <View key={task.id} style={styles.upcomingCard}>
            <View style={styles.upcomingLeft}>
              <Text style={styles.upcomingTitle}>
                {task.title}
              </Text>
              <Text style={styles.upcomingDate}>
                {task.date}
              </Text>
            </View>

            <View
              style={[
                styles.priorityBadge,
                {
                  backgroundColor:
                    task.priorityColor,
                },
              ]}
            >
              <Text style={styles.priorityText}>
                {task.priority}
              </Text>
            </View>
          </View>
        ))}

        {/* NOTIFICATIONS */}
        <Text style={styles.sectionTitle}>
          Notifications
        </Text>

        <View style={styles.notificationCard}>
          <TouchableOpacity style={styles.notifClose}>
            <Text style={styles.notifCloseText}>
              ⊗
            </Text>
          </TouchableOpacity>

          <Text style={styles.notifText}>
            Reminder : vous avez une{"\n"}
            réunion aujourd'hui
          </Text>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>

      {/* TAB BAR */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => router.push("/calendrier")}
        >
          <Image
            source={require("../../assets/images/calen.png")}
            style={styles.navIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/mestaches")}
        >
          <Image
            source={require("../../assets/images/tache.png")}
            style={styles.navIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/page2")}
        >
          <Image
            source={require("../../assets/images/home.png")}
            style={[
              styles.navIcon,
              { width: 28, height: 28 },
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/settings")}
        >
          <Image
            source={require("../../assets/images/projectman.png")}
            style={styles.navIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/profile")}
        >
          <Image
            source={require("../../assets/images/user.png")}
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
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },

  logo: {
    width: 90,
    height: 40,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBtn: {
    marginLeft: 12,
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 100,
  },

  backBtn: {
    marginBottom: 10,
  },

  backArrow: {
    fontSize: 22,
    color: "#333",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical:
      Platform.OS === "ios" ? 10 : 6,
    marginBottom: 20,
  },

  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
  },

  greeting: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1A3050",
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },

  taskCardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  taskCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 14,
    marginHorizontal: 4,
    alignItems: "center",
    elevation: 2,
  },

  taskIconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  taskIconText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  taskCardLabel: {
    fontSize: 13,
    marginBottom: 4,
  },

  taskCardCount: {
    fontSize: 22,
    fontWeight: "bold",
  },

  upcomingCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },

  upcomingLeft: {
    marginBottom: 10,
  },

  upcomingTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },

  upcomingDate: {
    color: "#777",
    marginTop: 4,
  },

  priorityBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  priorityText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  notificationCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 18,
    marginBottom: 20,
    alignItems: "center",
    position: "relative",
  },

  notifClose: {
    position: "absolute",
    top: 10,
    right: 12,
  },

  notifCloseText: {
    fontSize: 18,
    color: "#999",
  },

  notifText: {
    fontSize: 15,
    color: "#1565C0",
    textAlign: "center",
    lineHeight: 22,
    fontWeight: "600",
  },

  tabBar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#C60A0A",
    height: 60,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navIcon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },
});