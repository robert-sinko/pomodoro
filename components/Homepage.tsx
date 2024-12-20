import FontAwesome from '@expo/vector-icons/FontAwesome';
import Header from './Header';
import { Box } from './ui/box';

export default function Homepage() {
  return (
    <Box className="bg-pomodoro-background h-full">
      <Header />
      <Box className="h-full items-center justify-center">
        <Box className="bg-pomodoro-main h-8 w-32"></Box>
        <FontAwesome name="play" size={48} className="text-typography-800" />
      </Box>
    </Box>
  );
}
