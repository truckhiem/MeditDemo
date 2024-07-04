/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ImagePicker} from './Components/ImagePicker/ImagePicker.connected';
import {MenuProvider} from './Components/Menu/MenuProvider';
import {TextOnImageProvider} from './Components/TextOnImage/TextOnImageProvider';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
  };

  return (
    <MenuProvider>
      <TextOnImageProvider>
        <SafeAreaView style={[backgroundStyle, styles.container]}>
          <StatusBar
            barStyle={isDarkMode ? 'dark-content' : 'light-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <ImagePicker maxImages={10} />
        </SafeAreaView>
      </TextOnImageProvider>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
