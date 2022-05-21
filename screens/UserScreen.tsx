import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Button from '../components/shareds/Button';
import { backgroundColor } from '../constants/Colors';
// // @ts-ignore

export default function UserScreen(props: any) {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Type your github username'
        style={styles.input}
        value={username}
        onChangeText={(value) => setUsername(value)}
      />

      <View style={styles.wrapper}>
        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', width: '100%' }}>
          <Button title={'Done'.toUpperCase()} onPress={() => {
            let user = username;
            setUsername('');
            { props?.navigation.navigate('Repository', { user }) }
          }}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: backgroundColor
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});
