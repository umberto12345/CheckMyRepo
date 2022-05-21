import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { SansText } from '../StyledText';
export default function Button(props: { onPress: any; title?: string | undefined; disabled?: boolean }) {
  const { onPress, title = 'Save', disabled=false } = props;
  return (
    <Pressable disabled={disabled} style={styles.button} onPress={onPress}>
      <SansText style={styles.text}>{title}</SansText>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 0,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});