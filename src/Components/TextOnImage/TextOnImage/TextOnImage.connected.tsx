import React from 'react';
import {TextOnImageUI} from './TextOnImage.ui';

type TextOnImageProps = {
  imageUrl: string;
  onFinish: (path?: string) => unknown;
};

export const TextOnImage = ({
  imageUrl,
  onFinish,
}: TextOnImageProps): JSX.Element => {
  return <TextOnImageUI imageUrl={imageUrl} onFinish={onFinish} />;
};
