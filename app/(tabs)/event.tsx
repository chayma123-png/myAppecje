import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function EventsScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.phone}>
        <View style={styles.topLabel}>
          <Text style={styles.topLabelText}>Events</Text>
        </View>

        <View style={styles.header}>
          <Image
            source={require("../../assets/images/logoeceje.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="#111" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="menu" size={30} color="#111" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.titleRow}>
          <TouchableOpacity>
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
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.eventTitle}>JET X PO</Text>

          <View style={styles.imageWrap}>
            <Image
              source={require("../../assets/images/jetxpo.jpg")}
              style={styles.eventImage}
              resizeMode="cover"
            />
          </View>

          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsText}>Voir détails</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Feather name="calendar" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="clipboard-outline" size={25} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <AntDesign name="home" size={25} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <MaterialCommunityIcons name="head-cog-outline" size={28} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Feather name="user" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#78b2a7",
    alignItems: "center",
  },

  phone: {
    width: "92%",
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    position: "relative",
  },

  topLabel: {
    height: 34,
    justifyContent: "center",
  },

  topLabelText: {
    color: "#dcefeb",
    fontSize: 16,
    fontWeight: "700",
  },

  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: 76,
    height: 48,
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginTop: 2,
  },

  title: {
    fontSize: 23,
    color: "#111",
    fontWeight: "500",
  },

  searchBox: {
    height: 36,
    marginTop: 8,
    marginHorizontal: 8,
    backgroundColor: "#e9e9e9",
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    gap: 12,
  },

  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#111",
    paddingVertical: 0,
  },

  card: {
    marginTop: 18,
    backgroundColor: "#f5f5ff",
    borderRadius: 28,
    paddingTop: 14,
    paddingHorizontal: 14,
    paddingBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },

  eventTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#141414",
    marginBottom: 12,
  },

  imageWrap: {
    height: 250,
    borderRadius: 4,
    overflow: "hidden",
  },

  eventImage: {
    width: "100%",
    height: "100%",
  },

  detailsButton: {
    alignSelf: "flex-end",
    marginTop: 8,
  },

  detailsText: {
    color: "#0067b8",
    fontSize: 15,
    fontWeight: "700",
  },

  bottomNav: {
    position: "absolute",
    left: 22,
    right: 22,
    bottom: 14,
    height: 36,
    backgroundColor: "#d90000",
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  navItem: {
    width: 38,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
});
