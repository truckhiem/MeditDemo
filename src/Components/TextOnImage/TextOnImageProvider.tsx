import React, {FC, useState} from 'react';
import {TextOnImage} from './TextOnImage/TextOnImage.connected';
import {TextOnImageContext} from './TextOnImageContext';
import {ImageOption} from './types';
import {View} from 'react-native';
import {styles} from './styles';

export const TextOnImageProvider: FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [imageOption, setImageOption] = useState<ImageOption>();
  const [isVisible, setIsVisible] = useState(false);

  const showTextOnImage = (image: ImageOption) => {
    setImageOption(image);
    setIsVisible(true);
  };

  const hideTextOnImage = () => {
    setImageOption(undefined);
    setIsVisible(false);
  };

  const onFinish = (imageUrl?: string) => {
    hideTextOnImage();
    if (imageUrl) {
      imageOption?.onFinish(imageUrl);
    }
  };

  return (
    <TextOnImageContext.Provider
      value={{showTextOnImage, hideTextOnImage, isVisible}}>
      {children}

      {imageOption && (
        <View style={styles.container}>
          <TextOnImage imageUrl={imageOption.path} onFinish={onFinish} />
        </View>
      )}
    </TextOnImageContext.Provider>
  );
};
