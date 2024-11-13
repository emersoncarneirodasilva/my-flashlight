import { useContext } from "react";
import { View, Text, Platform } from "react-native";
import { useStyles } from "../hooks/useStyles";
import { LanguageContext } from "../contexts/LanguagesContext";
import { StrobeContext } from "../contexts/StrobeContext";
import Slider from "@react-native-community/slider";
import { ThemeContext } from "../contexts/ThemeContext";

export const StrobeSlider = () => {
  const styles = useStyles();
  const { language } = useContext(LanguageContext)!;
  const { theme } = useContext(ThemeContext)!;
  const { intensity, setIntensity } = useContext(StrobeContext)!;

  if (Platform.OS !== "android") return null;

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderTitle}>
        {language === "portuguese" ? "Velocidade" : "Speed"}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={4}
        step={1}
        value={intensity}
        onValueChange={setIntensity}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor={theme === "dark" ? "#a5a5a5" : "#000000"}
        thumbTintColor="#FFFFFF"
      />
    </View>
  );
};
