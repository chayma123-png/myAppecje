import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Bell, Menu } from "lucide-react-native";
import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function AddEvent() {
  const router = useRouter();
  const { date } = useLocalSearchParams();

  const [title, setTitle] = useState("");

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER (same style as calendrier) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft color="black" size={24} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Ajouter une date limite</Text>

        <View style={styles.headerIcons}>
          <Bell color="black" size={24} style={{ marginRight: 15 }} />
          <Menu color="black" size={24} />
        </View>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>

        <Text style={styles.dateText}>
          Date sélectionnée: {date}
        </Text>

        <TextInput
          placeholder="Nom de la tâche / deadline"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.back()}
        >
          <Text style={{ color: "white" }}>Enregistrer</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

/* SAME UI STYLE */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  content: {
    padding: 20,
  },

  dateText: {
    fontSize: 16,
    marginBottom: 20,
    color: "#414BB2",
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#F0F0F0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#414BB2",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
});