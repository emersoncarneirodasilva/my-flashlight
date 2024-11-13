import { useState } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { useStyles } from "../hooks/useStyles";

interface ToggleSwitchProps {
  label: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

export default function ToggleSwitch({
  label,
  value,
  onValueChange,
}: ToggleSwitchProps) {
  const styles = useStyles();
  const [position] = useState(new Animated.Value(value ? 1 : 0));

  const handleToggle = () => {
    const toValue = value ? 0 : 1;

    // Animação do botão deslizando
    Animated.timing(position, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    onValueChange(!value);
  };

  const translateX = position.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity
        onPress={handleToggle}
        style={[
          styles.switchContainer,
          value ? styles.onBackground : styles.offBackground,
        ]}
      >
        <Animated.View
          style={[styles.circle, { transform: [{ translateX }] }]}
        />
      </TouchableOpacity>
    </View>
  );
}
