import { useContext } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_400Regular as Montserrat,
} from "@expo-google-fonts/montserrat";
import { useStyles } from "../hooks/useStyles";
import { LanguageContext } from "../contexts/LanguagesContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { ShakeContext } from "../contexts/ShakeContext";
import { StrobeSlider } from "../components/StrobeSlider";
import ToggleSwitch from "../components/ToggleSwitch";
import RadialToggle from "../components/RadialToggle";

export default function Settings() {
  const styles = useStyles();
  const { language, setLanguage } = useContext(LanguageContext)!;
  const { theme, setTheme } = useContext(ThemeContext)!;
  const { isShake, setIsShake } = useContext(ShakeContext)!;
  const [fontsLoaded] = useFonts({ Montserrat });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.settingsContainer}>
      <View style={styles.settingTitleContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
          <Ionicons
            size={28}
            name="arrow-back"
            color={theme === "dark" ? "#ffffff" : "#000000"}
          />
        </TouchableOpacity>
        <Text style={styles.settingTitle}>
          {language === "portuguese" ? "Configurações" : "Settings"}
        </Text>
      </View>

      <View style={styles.optionsContainer}>
        <Text style={styles.optionsTitle}>
          {language === "portuguese" ? "Idioma" : "Language"}
        </Text>

        {language === "portuguese" ? (
          <RadialToggle
            option1={{ label: "Português", value: "portuguese" }}
            option2={{ label: "Inglês", value: "english" }}
            setOption={setLanguage}
            currentValue={language}
          />
        ) : (
          <RadialToggle
            option1={{ label: "Portuguese", value: "portuguese" }}
            option2={{ label: "English", value: "english" }}
            setOption={setLanguage}
            currentValue={language}
          />
        )}
      </View>

      <View style={styles.line} />

      <View style={styles.optionsContainer}>
        <Text style={styles.optionsTitle}>
          {language === "portuguese" ? "Tema" : "Theme"}
        </Text>
        {language === "portuguese" ? (
          <RadialToggle
            option1={{ label: "Escuro", value: "dark" }}
            option2={{ label: "Claro", value: "light" }}
            currentValue={theme}
            setOption={setTheme}
          />
        ) : (
          <RadialToggle
            option1={{ label: "Dark", value: "dark" }}
            option2={{ label: "Light", value: "light" }}
            currentValue={theme}
            setOption={setTheme}
          />
        )}
      </View>

      <View style={styles.line} />

      <View style={styles.optionsContainer}>
        <Text style={styles.optionsTitle}>
          {language === "portuguese" ? "Chacoalhar" : "Shake"}
        </Text>

        <ToggleSwitch
          label={language === "portuguese" ? "Ligado/Desligado" : "On/Off"}
          value={isShake}
          onValueChange={setIsShake}
        />
      </View>

      <View style={styles.line} />

      <View style={styles.optionsContainer}>
        <Text style={styles.optionsTitle}>
          {language === "portuguese" ? "Estroboscópio" : "Strobe"}
        </Text>

        <StrobeSlider />

        <View style={styles.sliderTextContainer}>
          <Text style={styles.sliderText}>
            {language === "portuguese" ? "Lento" : "Slow"}
          </Text>
          <Text style={styles.sliderText}>
            {language === "portuguese" ? "Normal" : "Normal"}
          </Text>
          <Text style={styles.sliderText}>
            {language === "portuguese" ? "Acelerado" : "accelerated"}
          </Text>
          <Text style={styles.sliderText}>
            {language === "portuguese" ? "Rápido" : "Fast"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
