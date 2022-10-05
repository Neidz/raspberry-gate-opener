import React, {FC} from 'react';
import BitcoinIcon from './assets/bitcoin-brands.svg';
import BoltIcon from './assets/bolt-solid.svg';
import MicrochipIcon from './assets/microchip-solid.svg';
import GithubIcon from './assets/github-brands.svg';
import {Linking, Pressable, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  peakOfHumor: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 0 50px 0',
  },
  svg: {
    color: 'rgb(223, 223, 223)',
  },
  header3: {
    padding: '14px 0 6px 0',
    fontSize: 13,
  },
  perks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  perksRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
    padding: '6px 10px',
    textAlign: 'left',
    backgroundColor: 'rgba(141, 36, 240, 0.192)',
    borderRadius: 8,
  },
  standadText: {
    fontSize: 13,
  },
  clients: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  opinion: {
    display: 'flex',
    flexDirection: 'column',
    padding: '6px 10px',
    textAlign: 'left',
    backgroundColor: 'rgba(141, 36, 240, 0.192)',
    filter: 'drop-shadow(1px -1px 10px rgb(26, 26, 187))',
    borderRadius: 8,
  },
  opinionAuthor: {
    textAlign: 'right',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '20px',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  findMore: {
    color: 'white',
    padding: '6px 10px',
    borderRadius: 8,
    backgroundColor: 'rgba(141, 36, 240, 0.192)',
    filter: 'drop-shadow(1px -1px 10px rgb(26, 26, 187))',
  },
});

export const PeakOfHumor: FC = () => {
  return (
    <View style={styles.peakOfHumor}>
      <Text style={styles.header3}>About The Gate Opener</Text>
      <View style={styles.perks}>
        <View style={styles.perksRow}>
          <BitcoinIcon width={40} height={40} style={styles.svg} />
          <Text style={styles.standadText}>
            Powered by gate coin, first in the world cryptocurrency created for
            all your gate opening needs{' '}
          </Text>
        </View>
        <View style={styles.perksRow}>
          <MicrochipIcon width={40} height={40} style={styles.svg} />
          <Text style={styles.standadText}>
            Our powerful cutting-edge machine learning algorithm makes sure that
            your experience will only get better
          </Text>
        </View>
        <View style={styles.perksRow}>
          <BoltIcon width={40} height={40} style={styles.svg} />
          <Text style={styles.standadText}>
            Blazing fast and reliable - it just works
          </Text>
        </View>
      </View>
      <Text style={styles.header3}>Don't trust us, trust our clients</Text>
      <View style={styles.clients}>
        <View style={styles.opinion}>
          <Text style={styles.standadText}>Life changing</Text>
          <Text style={styles.standadText}>-Tom</Text>
        </View>
        <View style={styles.opinion}>
          <Text style={styles.standadText}>
            I don't know how we would live today without implementing blockchain
            into our gate openers
          </Text>
          <Text style={styles.standadText}>-Susan</Text>
        </View>
        <View style={styles.opinion}>
          <Text style={styles.standadText}>Gate NFT's when?</Text>
          <Text style={styles.standadText}>-Jerremy</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable
          onPress={() =>
            Linking.openURL('https://www.youtube.com/watch?v=Tt7bzxurJ1I')
          }>
          <Text>Learn more about gate coin</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            Linking.openURL('https://github.com/Neidz/raspberry-gate-opener')
          }>
          <GithubIcon width={40} height={40} style={styles.svg} />
        </Pressable>
      </View>
    </View>
  );
};
