import React from 'react';
import {ImagePickerUI} from './ImagePicker.ui';
import usePickerHook from './hook';

type ImagePickerProps = {
  maxImages?: number;
};

export const ImagePicker = ({
  maxImages = 10,
}: ImagePickerProps): JSX.Element => {
  const {onImagePicker, onRemoveItem, onEditItem, imagesSelected} =
    usePickerHook(maxImages);

  return (
    <ImagePickerUI
      onAddImage={onImagePicker}
      imagesSelected={imagesSelected}
      onDeleteImage={onRemoveItem}
      onEditImage={onEditItem}
    />
  );
};
