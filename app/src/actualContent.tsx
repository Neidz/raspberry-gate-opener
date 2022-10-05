import React from 'react';
import {FC, useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  button: {
    margin: '10px 0',
    width: '150px',
    height: '30px',
    color: 'white',
    backgroundColor: 'rgba(141, 36, 240, 0.192)',
    filter: 'drop-shadow(1px -1px 10px rgb(26, 26, 187))',
    borderRadius: 8,
  },
  smallText: {
    fontSize: 5,
  },
  header1: {
    fontSize: 20,
  },
  header2: {
    fontSize: 14,
  },
  header3: {
    fontSize: 13,
  },
  red: {
    color: 'red',
  },
  green: {
    color: 'green',
  },
  orange: {
    color: 'orange',
  },
});

export const ActualContent: FC = () => {
  const [raspberryStatus, setRaspberryStatus] = useState<
    'alive' | 'disconnected' | 'checking'
  >('checking');
  const [openingStatus, setOpeningStatus] = useState<
    'open/close the gate' | 'working' | 'try again?'
  >('open/close the gate');

  const checkStatus = async () => {
    const controller = new AbortController();

    const timer = setTimeout(() => controller.abort(), 2500);
    try {
      const response = await fetch('http://192.168.1.84:8080/status', {
        signal: controller.signal,
      });
      clearTimeout(timer);

      const status = await response.json();
      status === 'alive' && setRaspberryStatus('alive');
    } catch (err: unknown) {
      console.log(err);
      setRaspberryStatus('disconnected');
    }
  };

  const openGate = async () => {
    try {
      const response = await fetch('http://192.168.1.84:8080/open');
      const responseJson = await response.json();

      if (responseJson === 'opening') {
        setOpeningStatus('working');
        setTimeout(() => setOpeningStatus('open/close the gate'), 3000);
      } else {
        setOpeningStatus('try again?');
      }
    } catch (err: unknown) {
      setOpeningStatus('try again?');
      console.log(err);
    }
  };

  useEffect(() => {
    setRaspberryStatus('checking');
    setInterval(() => checkStatus(), 3000);
  }, []);

  return (
    <View>
      <Text style={styles.header1}>The Gate Opener</Text>
      <Text style={styles.header2}>First* in the world remote gate opener</Text>
      <Text style={styles.smallText}>*on that local network</Text>
      <Pressable style={styles.button} onPress={() => openGate()}>
        <Text>{openingStatus}</Text>
      </Pressable>
      <Text>
        connetion:
        {raspberryStatus === 'alive' && (
          <Text style={styles.green}> all good</Text>
        )}
        {raspberryStatus === 'disconnected' && (
          <Text style={styles.red}> not responding</Text>
        )}
        {raspberryStatus === 'checking' && (
          <Text style={styles.orange}> checking</Text>
        )}
      </Text>
    </View>
  );
};
