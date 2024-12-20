import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Box } from './ui/box';
import { Text } from './ui/text';

export default function Timer() {
  return (
    <Box className="mt-16 h-96 w-96 flex-row items-center justify-center rounded-full bg-pomodoro-main p-2">
      <Text className="text-8xl">17:59</Text>
    </Box>
  );
}
