import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";

export const useStyles = () => {
  const { theme } = useContext(ThemeContext)!;

  return StyleSheet.create({
    // Home Page
    container: {
      flex: 1,
      justifyContent: "space-between",
      paddingHorizontal: 22,
      backgroundColor: `${theme === "dark" ? "#0f0f0f" : "#cecece"}`,
    },
    containerPermission: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 22,
    },
    messagePermission: {
      textAlign: "center",
      fontSize: 16,
      paddingBottom: 40,
      color: "#303030",
    },
    hiddenCamera: {
      position: "absolute",
      width: 1,
      height: 1,
      opacity: 0,
    },
    titleContainer: {
      marginTop: 62,
    },
    title: {
      textAlign: "center",
      fontFamily: "BadScript",
      fontSize: 32,
      color: `${theme === "light" ? "#303030" : "#ebebeb"}`,
    },
    lightButtonContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    lightButtonImg: {
      width: 200,
      height: 200,
    },
    strobeAndSosContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 150,
    },
    strobeAndSosButtonImg: {
      justifyContent: "center",
      alignItems: "center",
      width: 170,
      height: 170,
    },
    strobeText: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontSize: 15,
      letterSpacing: 0.5,
      marginTop: 10,
      marginRight: 3,
      color: `${theme === "light" ? "#303030" : "#ebebeb"}`,
    },
    sosText: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontSize: 15,
      marginTop: 10,
      marginLeft: 3.8,
      color: `${theme === "light" ? "#303030" : "#ebebeb"}`,
    },

    // Settings Page
    settingsContainer: {
      flex: 1,
      paddingHorizontal: 22,
      backgroundColor: `${theme === "dark" ? "#0f0f0f" : "#cecece"}`,
    },
    settingTitleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      marginTop: 62,
      marginBottom: 20,
    },
    backIcon: {
      position: "absolute",
      left: 0,
    },
    settingTitle: {
      textAlign: "center",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontSize: 24,
      color: `${theme === "light" ? "#303030" : "#ebebeb"}`,
    },
    optionsContainer: {
      marginTop: 20,
    },
    optionsTitle: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontSize: 18,
      letterSpacing: 0.5,
      paddingHorizontal: 16,
      color: `${theme === "light" ? "#303030" : "#ebebeb"}`,
    },
    line: {
      width: "100%",
      height: 0.8,
      marginVertical: 10,
      backgroundColor: `${theme === "light" ? "#777" : "#cecece"}`,
    },

    // Radial Toggle Component
    Radialcontainer: {
      padding: 16,
    },
    optionContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 8,
      width: "100%",
    },
    outerCircle: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: `${theme === "light" ? "#777" : "#888"}`,
      justifyContent: "center",
      alignItems: "center",
    },
    selectedOuterCircle: {
      borderColor: "#007AFF",
    },
    innerCircle: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: "#007AFF",
    },
    optionText: {
      fontFamily: "Montserrat",
      fontSize: 16,
      color: `${theme === "light" ? "#303030" : "#ebebeb"}`,
    },

    // Toggle Switch
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 8,
      padding: 16,
      width: "100%",
    },
    label: {
      fontFamily: "Montserrat",
      fontSize: 16,
      marginRight: 10,
      color: `${theme === "light" ? "#303030" : "#ebebeb"}`,
    },
    switchContainer: {
      width: 50,
      height: 30,
      borderRadius: 15,
      padding: 2,
      justifyContent: "center",
    },
    onBackground: {
      backgroundColor: "#007AFF",
    },
    offBackground: {
      backgroundColor: `${theme === "light" ? "#acacac" : "#ccc"}`,
    },
    circle: {
      width: 26,
      height: 26,
      borderRadius: 13,
      backgroundColor: "#fff",
    },

    // Strobe Slider
    sliderContainer: {
      width: "100%",
      marginTop: 25,
    },
    sliderTitle: {
      textAlign: "left",
      fontFamily: "Montserrat",
      fontSize: 16,
      marginBottom: 10,
      marginLeft: 17,
      color: `${theme === "light" ? "#303030" : "#ebebeb"}`,
      opacity: 0.8,
    },
    slider: {
      width: "100%",
      height: 40,
    },
    sliderTextContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      marginBottom: 30,
    },
    sliderText: {
      fontFamily: "Montserrat",
      fontSize: 12,
      color: `${theme === "light" ? "#303030" : "#ebebeb"}`,
    },
  });
};
