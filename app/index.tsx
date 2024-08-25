import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Home from "../src/views/Home";

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
        <Home />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7, 26, 93, 366)",
  },
});
