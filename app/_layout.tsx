import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Text } from '@/components/ui/text';
import '@/global.css';
import { ThemeContext } from '@/src/context/ThemeContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      <RootLayoutNav />
    </GluestackUIProvider>
  );
}

function RootLayoutNav() {
  const [colorMode, setColorMode] = useState<'dark' | 'light'>('light');

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      <GluestackUIProvider mode="light">
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: '#fff' },
            header: () => <Text>here goes the header</Text>,
          }}
        >
          <Stack.Screen name="index" />
        </Stack>
      </GluestackUIProvider>
    </ThemeContext.Provider>
  );
}
