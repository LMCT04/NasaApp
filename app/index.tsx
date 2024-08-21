import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingTop: Platform.OS === "android" ? 30 : 0,
          paddingHorizontal: 15,
          flex: 1,
        }}
      >
        <Text style={{ color: "black" }}>
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
