import { StyleSheet, View, } from 'react-native';
import Button from '../components/shareds/Button';
import UrlView from '../components/shareds/UrlView';
import { backgroundColor } from '../constants/Colors';

export default function HomeScreen(props: any) {

  return (
    <View
      style={styles.container}
    >
      <UrlView array={['user', 'repo']} />
      <View style={styles.wrapper}>
        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', width: '100%' }}>
          <Button title={'Check'.toUpperCase()} onPress={() => {
            { props.navigation.navigate('User') }
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
    backgroundColor: backgroundColor
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
