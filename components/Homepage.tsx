import FontAwesome from '@expo/vector-icons/FontAwesome';
import Controls from './Controls';
import Header from './Header';
import { Box } from './ui/box';

export default function Homepage() {
  return (
    <Box className="h-full bg-pomodoro-background">
      <Header />
      <Box className="h-full items-center justify-center">
        <Controls />
        <FontAwesome name="play" size={48} className="text-typography-800" />
      </Box>
    </Box>
  );
}
