/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {WebView} from 'expo-web-view';

function App(): JSX.Element {
  return (
    <WebView
      style={{flex: 1}}
      url="https://expo.dev"
      onLoad={(event: {nativeEvent: {url: any}}) => {
        alert(`loaded ${event.nativeEvent.url}`);
        // console.log(`loaded ${event.nativeEvent.url}`);
      }}
    />
  );
}

export default App;
