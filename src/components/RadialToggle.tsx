import { View, Text, TouchableOpacity } from "react-native";
import { useStyles } from "../hooks/useStyles";

interface RadialToggleProps<T> {
  option1: {
    label: string;
    value: T;
  };
  option2: {
    label: string;
    value: T;
  };
  currentValue: T;
  setOption: (value: T) => void;
}

export default function RadialToggle<T>({
  option1,
  option2,
  setOption,
  currentValue,
}: RadialToggleProps<T>) {
  const styles = useStyles();

  return (
    <View style={styles.Radialcontainer}>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => setOption(option1.value)}
      >
        <Text style={styles.optionText}>{option1.label}</Text>
        <View
          style={[
            styles.outerCircle,
            currentValue === option1.value && styles.selectedOuterCircle,
          ]}
        >
          {currentValue === option1.value && (
            <View style={styles.innerCircle} />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => setOption(option2.value)}
      >
        <Text style={styles.optionText}>{option2.label}</Text>
        <View
          style={[
            styles.outerCircle,
            currentValue === option2.value && styles.selectedOuterCircle,
          ]}
        >
          {currentValue === option2.value && (
            <View style={styles.innerCircle} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
