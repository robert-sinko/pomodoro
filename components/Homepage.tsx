import Controls from './Controls';
import Header from './Header';
import Timer from './Timer';
import { Box } from './ui/box';

export default function Homepage() {
  return (
    <Box className="h-full bg-pomodoro-background">
      <Header />
      <Box className="h-full items-center justify-center">
        <Controls />
        <Timer />
      </Box>
    </Box>
  );
}
