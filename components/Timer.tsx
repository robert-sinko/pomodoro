import CircularProgress from 'react-native-circular-progress-indicator';
import { Box } from './ui/box';

export default function Timer() {
  return (
    <Box className="mt-16 h-96 w-96 flex-row items-center justify-center rounded-full bg-pomodoro-main p-2 shadow-2xl shadow-pomodoro-typography/5">
      <CircularProgress
        value={75}
        radius={180}
        duration={0}
        progressValueColor={'#ecf0f1'}
        activeStrokeColor={'#F37070'}
        inActiveStrokeColor="transparent"
        maxValue={100}
        title={'PAUSED'}
        titleColor={'white'}
        titleStyle={{ fontSize: 16 }}
        activeStrokeWidth={12}
        progressFormatter={() => '15:59'}
      />
    </Box>
  );
}
