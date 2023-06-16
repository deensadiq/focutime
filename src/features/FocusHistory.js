import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  if (!history || !history.length)
    return (
      <Text style={{ color: colors.white, padding: spacing.sm, fontWeight: 'bold' }}>
        We haven't focus on anything yet!
      </Text>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What we've focus on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.sm,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
  },
  item: {
    color: colors.white,
  },
});
