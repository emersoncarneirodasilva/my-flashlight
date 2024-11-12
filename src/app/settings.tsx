import { Text, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular as Montserrat,
} from "@expo-google-fonts/montserrat";

export default function Settings() {
  const [fontsLoaded] = useFonts({ Montserrat });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontFamily: "Montserrat",
          fontWeight: "600",
          fontSize: 16,
        }}
      >
        Settings Page
      </Text>
    </View>
  );
}
