//import { Ionicons, AntDesign, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Config from '../screens/Config';
import Counters from '../screens/Counters';
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { CountersContextProvider } from '../context/CountersContext';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <CountersContextProvider>
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Counters"
          tabBarOptions={tabBarOptions}
        >
          <BottomTab.Screen
            name="Counters"
            component={Counters}
            options={{
              title: 'Counters',
              tabBarIcon: ({ color }) => (
                <FontAwesome name="star" size={24} color={color} />
              )

            }}
          />
          <BottomTab.Screen
            name="Config"
            component={Config}
            options={{
              title: 'Config',
              tabBarIcon: ({ color }) => (
                <FontAwesome name="star" size={24} color={color} />
              )
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </CountersContextProvider>
  );
}

const tabBarOptions = {
  activeTintColor: '#ff751a',
  inactiveTintColor: 'grey',
  style: {
    backgroundColor: '#000066',
  }
}
