import { Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View>
      <View>
        <Text>Explore</Text>
      </View>
      <View>
        <Image source={require("../../../assets/images/nasa-logo.png")} />
      </View>
    </View>
  );
};

export default Header;
