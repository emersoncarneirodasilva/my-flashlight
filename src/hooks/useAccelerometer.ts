import { useState, useEffect, useContext } from "react";
import { Accelerometer } from "expo-sensors";
import { Vibration } from "react-native";
import { SHAKE_THRESHOLD, SHAKE_DELAY } from "../constants/flashlight";
import { ShakeContext } from "../contexts/ShakeContext";

export const useAccelerometer = (onShake: () => void) => {
  const { isShake } = useContext(ShakeContext)!;
  const [lastShake, setLastShake] = useState(0);

  useEffect(() => {
    Accelerometer.setUpdateInterval(100);

    const subscription = Accelerometer.addListener((accelerometerData) => {
      const { x, y, z } = accelerometerData;
      const totalForce = Math.sqrt(x * x + y * y + z * z);
      const now = Date.now();

      if (
        totalForce > SHAKE_THRESHOLD &&
        now - lastShake > SHAKE_DELAY &&
        isShake
      ) {
        setLastShake(now);
        onShake();
        Vibration.vibrate(200);
      }
    });

    return () => {
      subscription && subscription.remove();
    };
  }, [lastShake, onShake]);
};
