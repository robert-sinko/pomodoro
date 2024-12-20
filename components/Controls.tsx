import { Box } from './ui/box';

export default function Controls() {
  return (
    <Box className="flex-row rounded-full bg-pomodoro-main p-2">
      <Box className="cursor-pointer rounded-full bg-pomodoro-primary p-3 px-6 text-sm font-bold text-pomodoro-background">
        pomodoro
      </Box>
      <Box className="cursor-pointer rounded-full p-3 px-6 text-sm font-bold hover:bg-pomodoro-primary hover:text-pomodoro-background">
        short break
      </Box>
      <Box className="cursor-pointer rounded-full p-3 px-6 text-sm font-bold hover:bg-pomodoro-primary hover:text-pomodoro-background">
        long break
      </Box>
    </Box>
  );
}
