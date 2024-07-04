import {createContext, useContext} from 'react';
import {TextOnImageData} from './types';

export const TextOnImageContext = createContext<TextOnImageData>({
  showTextOnImage: () => {},
  hideTextOnImage: () => {},
  isVisible: false,
});

export const useTextOnImage = (): TextOnImageData =>
  useContext(TextOnImageContext);
