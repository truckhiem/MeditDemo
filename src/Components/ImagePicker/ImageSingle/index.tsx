import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Icons} from 'assets';

type ImageSingleProps = {
  imageUri: string;
  onDelete: () => void;
  onEdit: () => void;
};

export const ImageSingle = ({
  imageUri,
  onDelete,
  onEdit,
}: ImageSingleProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onEdit}>
      <Image source={{uri: imageUri}} style={styles.image} />
      <TouchableOpacity onPress={onDelete} style={styles.iconDelete}>
        <Image source={Icons.ic_close} tintColor="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

type ImagePickerEmptyProps = {
  onPress: () => void;
};

export const ImagePickerEmpty = ({
  onPress,
}: ImagePickerEmptyProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cameraContainer}>
      <Image source={Icons.ic_camera} />
    </TouchableOpacity>
  );
};
