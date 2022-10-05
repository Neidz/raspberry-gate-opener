import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ActualContent} from './actualContent';
import {PeakOfHumor} from './peakOfHumor';

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: 100vh,
    padding: '10px 20px',
    backgroundColor: 'rgb(27, 27, 44)',
    color: 'rgb(207, 207, 207)',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <ActualContent />
      <PeakOfHumor />
    </SafeAreaView>
  );
};
