import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, } from 'react-native';

import Button from '../components/shareds/Button';
import UrlView from '../components/shareds/UrlView';

import { postMessage } from '../services/CheckMyRepoService';

export default function SendScreen(props: any) {
  let user = props?.route?.params?.user ?? '';
  let repositoryName = props?.route?.params?.repositoryName ?? '';
  const [isLoading, setLoading] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setLoading(false);
      };
    }, [])
  );
  return (
    <View
      style={styles.container}
    >
      <UrlView array={[user, repositoryName]} />
      <View style={styles.wrapper}>
        <View style={{ justifyContent: 'flex-end', backgroundColor: '#66cdaa' }}>
          <Button disabled={isLoading} title={'Send'.toUpperCase()} onPress={async () => {
            if (!isLoading) {
              setLoading(true);
              try {
                let data: any =
                  await postMessage(user, repositoryName);
                if (data) { props?.navigation.navigate('Done') }
              } catch (e: any) {
                if (e.toJSON().message === 'Network Error') {
                  let message = 'error-connection';
                  { props?.navigation.navigate('NotFound', { user, repositoryName, message }) }
                } else {
                  { props?.navigation.navigate('NotFound', { user, repositoryName }) }
                }
              }
            }
          }}></Button>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#66cdaa',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});
