import { Image, ScrollView, StatusBar, Text, View } from "react-native";

function FormationsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />

      <Header navigation={navigation} title="Les formations" />

      <View style={styles.content}>
        <SearchBar placeholder="Rechercher un projet" />

        <ScrollView showsVerticalScrollIndicator={false}>
          <SectionCard style={styles.trainingCard}>
            
            <Text style={styles.trainingLabel}>
              SCRUM AGILE
            </Text>

            {/* IMAGE CORRECTEMENT PLACÉE */}
            <Image
              source={require("../../assets/images/trainingImage.jpg")}
              style={styles.trainingImage}
              resizeMode="cover"
            />

          </SectionCard>
        </ScrollView>
      </View>

      <BottomNav navigation={navigation} active="profile" />
    </SafeAreaView>
  );
}