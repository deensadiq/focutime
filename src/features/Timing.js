import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../Components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Timing = ({ onChange }) => {
  return (
    <>
      <View style={styles.buttonWrapper}>
        <RoundedButton size={75} title="10" onPress={() => onChange(10)} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton size={75} title="15" onPress={() => onChange(15)} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton size={75} title="20" onPress={() => onChange(20)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
