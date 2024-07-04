import {useState} from 'react';
import {Alert, Linking} from 'react-native';
import ImagePicker, {
  ImageOrVideo as ImagePickerResult,
} from 'react-native-image-crop-picker';
import {useMenu} from '../Menu/MenuContext';
import {useTextOnImage} from '../TextOnImage/TextOnImageContext';

const usePickerHook = (maxImages: number) => {
  const [imagesSelected, setImages] = useState<Array<ImagePickerResult>>([]);
  const {showMenu} = useMenu();
  const {showTextOnImage} = useTextOnImage();

  const onImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      maxFiles: maxImages - imagesSelected.length,
    })
      .then((images: Array<ImagePickerResult>) => {
        if (images && images?.length > 0) {
          setImages(prevResults => [...prevResults, ...images]);
        }
      })
      .catch(e => {
        if (e.code.includes('PERMISSION')) {
          Alert.alert('', 'No Permission', [
            {text: 'Go to settings', onPress: () => Linking.openSettings()},
          ]);
        }
      });
  };

  const onEditItem = (pickerItem: ImagePickerResult) => {
    showMenu([
      {
        text: 'Edit Photo',
        onSelect: () => {
          onCropImage(pickerItem);
        },
      },
      {
        text: 'Add Text to Photo',
        onSelect: () => {
          showTextOnImage({
            path: pickerItem.path,
            onFinish: (imageUrl: string) => {
              setImages(
                imagesSelected.map(item =>
                  item.path === pickerItem.path
                    ? {...pickerItem, path: imageUrl}
                    : item,
                ),
              );
            },
          });
        },
      },
    ]);
  };

  const onCropImage = (pickerItem: ImagePickerResult) => {
    ImagePicker.openCropper({
      path: pickerItem.path,
      mediaType: 'photo',
    }).then((image: ImagePickerResult) => {
      setImages(
        imagesSelected.map(item =>
          item.path === pickerItem.path ? image : item,
        ),
      );
    });
  };

  const onRemoveItem = (pickerItem: ImagePickerResult) => {
    setImages(prevResults =>
      prevResults.filter(item => item.path !== pickerItem.path),
    );
  };

  return {
    imagesSelected,
    onImagePicker,
    onRemoveItem,
    onEditItem,
  };
};

export default usePickerHook;
