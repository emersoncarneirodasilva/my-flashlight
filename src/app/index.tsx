import {
  Button,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Montserrat_400Regular as Montserrat,
} from "@expo-google-fonts/montserrat";
import { BadScript_400Regular as BadScript } from "@expo-google-fonts/bad-script";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useFlashlight } from "../hooks/useFlashlight";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguagesContext";
import { useStyles } from "../hooks/useStyles";
import { useAccelerometer } from "../hooks/useAccelerometer";

const onButton = "@/src/assets/images/on.png";
const offButton = "@/src/assets/images/off.png";
const strobeButton = "@/src/assets/images/strobe-button.png";
const sosButton = "@/src/assets/images/sos-button.png";

export default function Index() {
  const styles = useStyles();
  const { language } = useContext(LanguageContext)!;
  const [permission, requestPermission] = useCameraPermissions();
  const [fontsLoaded] = useFonts({ Montserrat, BadScript });
  const {
    on,
    flashOn,
    isStrobeOn,
    isSosOn,
    setIsStrobeOn,
    toggleFlash,
    playSosSignal,
  } = useFlashlight();

  useAccelerometer(toggleFlash);

  if (!fontsLoaded) {
    return null;
  }

  if (!permission) {
    return (
      <View style={styles.containerPermission}>
        <Text style={styles.messagePermission}>Carregando...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.containerPermission}>
        <Text style={styles.messagePermission}>
          Precisamos da sua permissão para acessar a lanterna
        </Text>
        <Button onPress={requestPermission} title="Permitir acesso" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.hiddenCamera} enableTorch={flashOn} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Flashlight</Text>
      </View>

      <View style={styles.lightButtonContainer}>
        {isStrobeOn || isSosOn ? (
          <TouchableOpacity disabled={true}>
            <Image source={require(offButton)} style={styles.lightButtonImg} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={toggleFlash}
            disabled={isSosOn ? true : false}
          >
            {on ? (
              <Image source={require(onButton)} style={styles.lightButtonImg} />
            ) : (
              <Image
                source={require(offButton)}
                style={styles.lightButtonImg}
              />
            )}
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.strobeAndSosContainer}>
        <TouchableOpacity
          onPress={() => setIsStrobeOn((prev) => !prev)}
          disabled={isSosOn ? true : false}
        >
          <ImageBackground
            source={require(strobeButton)}
            style={styles.strobeAndSosButtonImg}
          >
            <Text style={styles.strobeText}>
              {language === "portuguese" ? "Piscar" : "Blink"}
            </Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={playSosSignal}
          disabled={isSosOn ? true : false}
        >
          <ImageBackground
            source={require(sosButton)}
            style={styles.strobeAndSosButtonImg}
          >
            <Text style={styles.sosText}>S.O.S.</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}
