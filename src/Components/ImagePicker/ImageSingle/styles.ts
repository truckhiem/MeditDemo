import {StyleSheet} from 'react-native';
import {NUMBER_OF_IMAGES_IN_ROW} from 'utils/constants';
import {calculateImageSize} from 'utils/helper';

const MARGIN_BETWEEN_IMAGES = 10;
const IMAGE_SIZE = calculateImageSize(
  MARGIN_BETWEEN_IMAGES,
  NUMBER_OF_IMAGES_IN_ROW,
);

export const styles = StyleSheet.create({
  container: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: MARGIN_BETWEEN_IMAGES,
  },
  cameraContainer: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: MARGIN_BETWEEN_IMAGES,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C6C6C6',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  iconDelete: {
    position: 'absolute',
    top: -5,
    right: -5,
    borderRadius: 10,
    backgroundColor: 'red',
    overflow: 'hidden',
  },
});
