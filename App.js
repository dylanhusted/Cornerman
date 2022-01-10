import React, { useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry, Button, Icon } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {
  const pulseIconRef = useRef();

  useEffect(() => {
    pulseIconRef.current.startAnimation();
  });

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={styles.container}>
          <Icon
            name="clock-outline"
            fill="#8F9BB3"
            style={styles.icon}
            ref={pulseIconRef}
            animation="pulse"
          />
          <Text> 
            Cornerman
          </Text>
          <Button style={styles.button}>Start</Button>
          <StatusBar style="auto" />
        </View>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 10
  },
  button: {
    marginTop: 25
  }
});
