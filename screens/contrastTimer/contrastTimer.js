import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Icon } from '@ui-kitten/components';
import { contrastSchedule } from '../../util/constants';
import Countdown from './countdown';

export default function ContrastTimer({ navigation }) {
  const pulseIconRef = useRef();
  const [currentBlock, setCurrentBlock] = useState(contrastSchedule[0]);

  useEffect(() => {
    pulseIconRef.current.startAnimation();
  });

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      const nextIndex = currentBlock.index + 1;
      setCurrentBlock(contrastSchedule[nextIndex]);
    }, currentBlock.timeMs);
 
    return () => clearTimeout(timeout);
   },[]);

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
        Contrast Timer
      </Text>
      <Countdown totalTimeS={currentBlock.timeMs / 1000} />
      <Text>
        {currentBlock?.expalainerText || ''}
      </Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        Stop
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
