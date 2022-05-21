import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, ImageSourcePropType } from 'react-native';
import file from './../assets/back_icon/back.png';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomScreen';
import UserScreen from '../screens/UserScreen';
import { RootStackParamList, } from '../types';
import RepositoryScreen from '../screens/RepositoryScreen';
import SendScreen from '../screens/SendScreen';
import DoneScreen from '../screens/DoneScreen';
import { backgroundColor } from '../constants/Colors';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();


function RootNavigator() {
  let headerShow: any = {

    headerShadowVisible: false,
    headerBackImageSource: file as ImageSourcePropType,
    headerStyle: { backgroundColor: backgroundColor },
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
  return (
    <Stack.Navigator >
      <Stack.Screen name="Root" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="User" component={UserScreen} options={headerShow} />
      <Stack.Screen name="Repository" component={RepositoryScreen} options={headerShow} />
      <Stack.Screen name="Send" component={SendScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Done" component={DoneScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}