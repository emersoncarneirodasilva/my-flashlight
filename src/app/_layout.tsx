import { LanguageProvider } from "../contexts/LanguagesContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { ShakeProvider } from "../contexts/ShakeContext";
import { StrobeProvider } from "../contexts/StrobeContext";
import TabNavigator from "../components/TabNavigator";

export default function RootLayout() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ShakeProvider>
          <StrobeProvider>
            <TabNavigator />
          </StrobeProvider>
        </ShakeProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
