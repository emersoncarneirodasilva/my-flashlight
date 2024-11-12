import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#438fff",
        tabBarInactiveTintColor: "#665",
        tabBarActiveBackgroundColor: "#000",
        tabBarInactiveBackgroundColor: "#000",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Lanterna",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="flashlight-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="settings-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
