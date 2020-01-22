/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';

const {height, width} = Dimensions.get('window');

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: 50, backgroundColor: 'yellow'}} />
        <LottieView
          style={{width: '100%'}}
          source={require('./6601-snooped.json')}
          autoPlay
          loop
        />
        <View style={{height: 50, backgroundColor: 'red'}} />
      </SafeAreaView>
    </>
  );
};

export default App;
