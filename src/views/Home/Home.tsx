import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../utils/fetch";
import { useEffect, useState } from "react";

const Home = () => {
  const [todaysImage, setTodaysImage] = useState();

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage(undefined);
      }
    };
    loadTodaysImage().catch(null);
  }, []);

  console.log(todaysImage);

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
