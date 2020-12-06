import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

//import useCachedResources from './hooks/useCachedResources';
//import useColorScheme from './hooks/useColorScheme';


export default function App() {
  return (
    <SafeAreaProvider>
      <BottomTabNavigator />
      <StatusBar />
    </SafeAreaProvider>
  );
}