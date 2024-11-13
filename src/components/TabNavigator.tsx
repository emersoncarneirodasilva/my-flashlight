import { Tabs } from "expo-router";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { LanguageContext } from "../contexts/LanguagesContext";

export default function TabNavigator() {
  const { theme } = useContext(ThemeContext)!;
  const { language } = useContext(LanguageContext)!;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme === "dark" ? "#000" : "#fff",
        tabBarInactiveBackgroundColor: theme === "dark" ? "#000" : "#fff",
        tabBarActiveTintColor: theme === "dark" ? "#438fff" : "#3275da",
        tabBarInactiveTintColor: theme === "dark" ? "#665" : "#998",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: language === "portuguese" ? "Lanterna" : "Flashlight",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="flashlight-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: language === "portuguese" ? "Configurações" : "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="settings-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
