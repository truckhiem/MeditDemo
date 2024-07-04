import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageBg: {
    width: screenWidth,
    height: screenWidth,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  textInput: {
    backgroundColor: 'white',
  },
  textContainer: {
    top: 0,
    left: 0,
    position: 'absolute',
    padding: 100,
  },
  textInputContainer: {
    margin: 20,
    padding: 5,
    backgroundColor: 'white',
  },
  closeContainer: {
    position: 'absolute',
    top: 30,
    right: 10,
    padding: 10,
  },
  saveContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 20,
  },
});
