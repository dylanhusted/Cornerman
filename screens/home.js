import React, { useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Icon } from '@ui-kitten/components';

export default function Home({ navigation }) {
  const pulseIconRef = useRef();

  useEffect(() => {
    pulseIconRef.current.startAnimation();
  });

  return (
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
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('ContrastTimer')}
      >
        Start
      </Button>
    </View>
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
