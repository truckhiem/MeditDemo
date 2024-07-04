import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: '#000000b3',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    bottom: 0,
    right: 0,
  },
  itemContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 13,
  },
  button: {
    marginBottom: 12,
    marginHorizontal: 20,
    backgroundColor: 'white',
    padding: 10,
  },
  itemText: {
    color: 'black',
    fontSize: 18,
  },
});
