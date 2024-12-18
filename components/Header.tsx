import { ThemeContext } from '@/src/context/ThemeContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import { Text } from './ui/text';

export default function Header() {
  const { toggleColorMode } = useContext(ThemeContext);

  return (
    <View className="absolute right-0 z-10">
      <View className="flex-1"></View>
      <Pressable
        onPress={toggleColorMode}
        className="bg-blue-200 p-3 dark:bg-blue-900"
      >
        <FontAwesome name="sun-o" size={32} />
      </Pressable>
    </View>
  );
}
