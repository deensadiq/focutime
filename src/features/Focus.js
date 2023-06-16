import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../Components/RoundedButton';

export const Focus = ({ addFocus }) => {
  const [subject, setSubject] = useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          label="What will you want to focus on?"
          value={subject}
          onChangeText={setSubject}
        />
        <View style={styles.focusButton}>
          <RoundedButton onPress={() => addFocus(subject)} size={50} title="+" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  input: {
    flex: 4
  },
  focusButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
