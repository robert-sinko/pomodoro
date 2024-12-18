import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function Index() {
  return (
    <View style={styles.content}>
      <Text>center text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
})