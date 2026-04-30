import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { useRouter } from "expo-router";
import { ArrowLeft, Bell, Menu, Search } from "lucide-react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

/* ---------------- FRENCH CONFIG ---------------- */

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier","Février","Mars","Avril","Mai","Juin",
    "Juil.","Août","Septembre","Octobre","Novembre","Décembre"
  ],
  monthNamesShort: [
    "Janv.","Févr.","Mars","Avril","Mai","Juin",
    "Juil.","Août","Sept.","Oct.","Nov.","Déc."
  ],
  dayNames: [
    "Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"
  ],
  dayNamesShort: ["Di","Lu","Ma","Me","Je","Ve","Sa"],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = "fr";

export default function CalendarScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState("2026-04-30");

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft color="black" size={24} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Calendrier</Text>

        <View style={styles.headerIcons}>
          <Bell color="black" size={24} style={{ marginRight: 15 }} />
          <Menu color="black" size={24} />
        </View>
      </View>

      <ScrollView>

        {/* SEARCH */}
        <View style={styles.searchContainer}>
          <Search color="#888" size={20} style={{ marginRight: 10 }} />
          <TextInput placeholder="chercher..." style={{ flex: 1 }} />
        </View>

        {/* CALENDAR */}
        <View style={styles.calendarCard}>
          <Calendar

            /* ✅ LINK TO ADDEVENT PAGE */
            onDayPress={(day) =>
              router.push(`/addevent?date=${day.dateString}`)
            }

            markedDates={{
              [selected]: {
                selected: true,
                selectedColor: "#414BB2",
              },
            }}
          />
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}