import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Card />
      <Card />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#A52A2A',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
});
