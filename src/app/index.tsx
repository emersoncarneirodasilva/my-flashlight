import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  BadScript_400Regular as BadScript,
} from "@expo-google-fonts/bad-script";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useFlashlight } from "../hooks/useFlashlight";

const onButton = "@/src/assets/images/on.png";
const offButton = "@/src/assets/images/off.png";
const strobeButton = "@/src/assets/images/strobe-button.png";
const sosButton = "@/src/assets/images/sos-button.png";

export default function Index() {
  const [permission, requestPermission] = useCameraPermissions();
  const [fontsLoaded] = useFonts({ BadScript });
  const {
    on,
    flashOn,
    isStrobeOn,
    isSosOn,
    setIsStrobeOn,
    toggleFlash,
    playSosSignal,
  } = useFlashlight();

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
          <Image
            source={require(strobeButton)}
            style={styles.strobeAndSosButtonImg}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={playSosSignal}
          disabled={isSosOn ? true : false}
        >
          <Image
            source={require(sosButton)}
            style={styles.strobeAndSosButtonImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 22,
    backgroundColor: "#0f0f0f",
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
    color: "#000",
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
    color: "#fff",
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
    width: 170,
    height: 170,
  },
});
