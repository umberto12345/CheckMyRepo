import { StyleSheet,  View, } from 'react-native';

import Button from '../components/shareds/Button';

import { SansText } from './../components/StyledText';

export default function DoneScreen(props: any) {

  return (
    <View style={styles.container}>
      <SansText style={styles.title}>
        All Done Repository sent.
      </SansText>
      <View style={styles.wrapper}>
        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', width: '100%' }}>
          <Button title={'Done'.toUpperCase()} onPress={() => {
            { props?.navigation.replace('Root') }
          }}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingTop: 100,
    fontSize: 32,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    padding: 20,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});
