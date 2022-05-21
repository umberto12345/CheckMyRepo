import { StyleSheet, View, } from 'react-native';

import { RootStackScreenProps } from '../types';
import UrlView from '../components/shareds/UrlView';
import Button from '../components/shareds/Button';

export default function NotFoundScreen({ route, navigation }: RootStackScreenProps<'NotFound'>) {
  let user = (route?.params as any)?.user ?? '';
  let repositoryName = (route?.params as any)?.repositoryName ?? '';
  let message = (route?.params as any)?.message ?? ''
  return (
    <View
      style={styles.container}
    >
      <UrlView array={[user, repositoryName]} message={message} />
      <View style={styles.wrapper}>

        <View style={{
          justifyContent: 'flex-end', backgroundColor: '#f08080',
        }}>
          <Button title={'Check'.toUpperCase()} onPress={() => {
            { navigation.replace('Root') }
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
    backgroundColor: '#f08080',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  url: {
    fontSize: 30,
    color: 'grey'
  }
});
