import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Home from './screens/home';
import ContrastTimer from './screens/contrastTimer/contrastTimer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="ContrastTimer"
            component={ContrastTimer}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </ApplicationProvider>
    </NavigationContainer>
  );
}
