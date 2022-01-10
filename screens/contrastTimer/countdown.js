import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Icon } from '@ui-kitten/components';
import { contrastSchedule } from '../../util/constants';

export default function Countdown({ totalTimeS }) {
  const [currentSeconds, setCurrentSeconds] = useState(totalTimeS);

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      if (currentSeconds !== 0) setCurrentSeconds(currentSeconds - 1);
    }, 1000);
 
    return () => clearTimeout(timeout);
   }, [currentSeconds]);

  return (
    <Text> 
        {currentSeconds}
    </Text>
  );
}
