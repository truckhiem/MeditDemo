import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {ImageOrVideo as ImagePickerResult} from 'react-native-image-crop-picker';
import {NUMBER_OF_IMAGES_IN_ROW} from 'utils/constants';
import {ImagePickerEmpty, ImageSingle} from './ImageSingle';
import {styles} from './styles';

type ImagePickerUIProps = {
  onAddImage: () => void;
  onDeleteImage: (image: ImagePickerResult) => void;
  onEditImage: (image: ImagePickerResult) => void;
  imagesSelected: Array<ImagePickerResult>;
};

const EmptyItem: ImagePickerResult = {
  path: '',
  size: 0,
  width: 0,
  height: 0,
  mime: '',
};

export const ImagePickerUI = ({
  onAddImage,
  onDeleteImage,
  onEditImage,
  imagesSelected,
}: ImagePickerUIProps): JSX.Element => {
  const renderItem = useCallback(
    ({item}: {item: ImagePickerResult}) => {
      if (!item.path) {
        return <ImagePickerEmpty onPress={onAddImage} />;
      }
      return (
        <ImageSingle
          imageUri={item.path}
          onDelete={() => onDeleteImage(item)}
          onEdit={() => onEditImage(item)}
        />
      );
    },
    [onAddImage, onDeleteImage, onEditImage],
  );

  return (
    <FlatList
      contentContainerStyle={styles.content}
      data={[...imagesSelected, EmptyItem]}
      renderItem={renderItem}
      numColumns={NUMBER_OF_IMAGES_IN_ROW}
      keyExtractor={item => `${item?.path || ''}`}
    />
  );
};
