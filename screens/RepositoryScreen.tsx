import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Button from '../components/shareds/Button';
import { fetchRepo } from '../services/CheckMyRepoService';
export default function RepositoryScreen(props: any) {

  const [repository, setRepository] = useState('');
  const [isLoading, setLoading] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setRepository('');
        setLoading(false);
      };
    }, [])
  );
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Type your repository name'
        style={styles.input}
        value={repository}
        onChangeText={(value) => setRepository(value)}
      />
      <View style={styles.wrapper}>
        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', width: '100%' }}>
          <Button title={'Done'.toUpperCase()} onPress={async () => {
            let user = props?.route?.params?.user ?? '';
            let repositoryName = repository;
            if (!isLoading) {
              setLoading(true);
              if (!repositoryName || !user) {

                let message = 'error-user';
                { props?.navigation.navigate('NotFound', { user, repositoryName, message }) }
              } else {
                try {
                  let data: any = await fetchRepo(user, repositoryName);
                  { props?.navigation.navigate('Send', { repositoryName, user }) }

                } catch (e: any) {
                  if (e.toJSON().message === 'Network Error') {
                    let message = 'error-connection';
                    { props?.navigation.navigate('NotFound', { user, repositoryName, message }) }
                  } else {
                    let message = 'error-user';
                    { props?.navigation.navigate('NotFound', { user, repositoryName, message }) }
                  }
                }
              }
            }
          }}></Button>
        </View>
      </View>
    </View >
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
    backgroundColor: 'white'
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});

