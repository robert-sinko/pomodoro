import FontAwesome from '@expo/vector-icons/FontAwesome';
import Header from './Header';
import { Box } from './ui/box';

export default function Homepage() {
  return (
    <Box className="h-full">
      <Header />
      <Box className="h-full items-center justify-center">
        <FontAwesome name="play" size={48} className="text-typography-800" />
      </Box>
    </Box>
  );
}
