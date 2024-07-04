import {Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('screen');

export const calculateImageSize = (
  marginBetweenImages: number,
  numberOfImagesInRow: number,
) => {
  return (
    (screenWidth - marginBetweenImages * 2 * (numberOfImagesInRow + 1)) /
    numberOfImagesInRow
  );
};
