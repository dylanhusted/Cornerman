import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Icon } from '@ui-kitten/components';
import { contrastSchedule } from '../../util/constants';
import Countdown from './countdown';

export default function ContrastTimer({ navigation }) {
  const shakeIconRef = useRef();
  const [currentBlock, setCurrentBlock] = useState(contrastSchedule[0]);

  useEffect(() => {
    shakeIconRef.current.startAnimation();
  });

  useEffect(() => {
    let timeout;
    if (currentBlock.timeMs) {
      timeout = setTimeout(() => {
        const nextIndex = currentBlock.index + 1;
        const nextBlock = contrastSchedule[nextIndex];
        if (nextBlock) setCurrentBlock(contrastSchedule[nextIndex]);
      }, currentBlock.timeMs);
    }
 
    return () => clearTimeout(timeout);
   }, [currentBlock]);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: currentBlock.generalTemp === 'hot' ? 'rgba(176, 0, 32, 0.4)' : 'rgba(4, 149, 238, 0.4)'
      }}
    >
      <Icon
        name={currentBlock.generalTemp === 'hot' ? "thermometer-plus-outline" : "thermometer-minus-outline"}
        fill="black"
        style={styles.icon}
        ref={shakeIconRef}
        animation="shake"
      />
      <Text> 
        Contrast Timer
      </Text>
      {currentBlock.timeMs &&
        <Countdown totalTimeS={currentBlock.timeMs / 1000} />
      }
      <Text style={styles.emojis}>
        {Array.from(Array(currentBlock.tempMagnitude)).map(() => {
          return currentBlock.generalTemp === 'hot' ? '🥵' : '🥶';
        })}
      </Text>
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
    padding: 50
  },
  icon: {
    width: 65,
    height: 65,
    marginBottom: 10
  },
  emojis: {
   fontSize: 65,
   marginBottom: 20
  },
  button: {
    marginTop: 25
  }
});
