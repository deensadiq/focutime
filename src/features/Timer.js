import { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../Components/Countdown';
import { RoundedButton } from '../Components/RoundedButton';
import { Timing } from './Timing';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
  4 * ONE_SECOND_IN_MS,
  5 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStart, setIsStart] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minustes, setMunites] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStart(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minustes}
          isPaused={!isStart}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.progressWrapper}>
        <ProgressBar
          height={spacing.sm}
          color={colors.progressBar}
          progress={progress}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChange={setMunites} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStart && (
          <RoundedButton
            size={100}
            title="start"
            onPress={() => setIsStart(true)}
          />
        )}
        {isStart && (
          <RoundedButton
            size={100}
            title="pause"
            onPress={() => setIsStart(false)}
          />
        )}
      </View>
      <View style={styles.clearButtonWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    flex: 0.4,
    paddingTop: spacing.lg,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  progressWrapper: {
    paddingLeft: spacing.sm,
    paddingRight: spacing.sm,
  },
  timingWrapper: {
    flex: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
