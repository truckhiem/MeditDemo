import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  PanResponder,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import {Icons} from 'assets';
import {styles} from './styles';

const {width: screenWidth} = Dimensions.get('screen');

const LIMIT_MOVE_BOTTOM = screenWidth - 100;
const LIMIT_MOVE_TOP = -100;

type TextOnImageUIProps = {
  imageUrl: string;
  onFinish: (path?: string) => unknown;
};

export const TextOnImageUI = ({
  imageUrl,
  onFinish,
}: TextOnImageUIProps): JSX.Element => {
  const [text, setText] = React.useState('');
  const pan = useRef(new Animated.ValueXY()).current;
  const refViewShot = useRef<ViewShot>(null);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > screenWidth) {
          pan.setValue({x: gestureState.dx, y: screenWidth});
        } else {
          pan.setValue({x: gestureState.dx, y: gestureState.dy});
        }
      },
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  const onCapture = () => {
    if (refViewShot?.current?.capture) {
      refViewShot.current.capture().then(uri => {
        console.log('do something with ', uri);
        onFinish(uri);
      });
    }
  };

  const onClose = () => {
    onFinish();
  };

  return (
    <View style={styles.container}>
      <ViewShot
        ref={refViewShot}
        options={{fileName: 'Your-File-Name', format: 'jpg', quality: 0.9}}>
        <ImageBackground source={{uri: imageUrl}} style={styles.imageBg}>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: pan.x.interpolate({
                    inputRange: [
                      LIMIT_MOVE_TOP,
                      0,
                      LIMIT_MOVE_BOTTOM,
                      Infinity,
                    ],
                    outputRange: [
                      LIMIT_MOVE_TOP,
                      0,
                      LIMIT_MOVE_BOTTOM,
                      LIMIT_MOVE_BOTTOM,
                    ],
                    extrapolate: 'clamp',
                  }),
                },
                {
                  translateY: pan.y.interpolate({
                    inputRange: [
                      LIMIT_MOVE_TOP,
                      0,
                      LIMIT_MOVE_BOTTOM,
                      Infinity,
                    ],
                    outputRange: [
                      LIMIT_MOVE_TOP,
                      0,
                      LIMIT_MOVE_BOTTOM,
                      LIMIT_MOVE_BOTTOM,
                    ],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
            {...panResponder.panHandlers}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{text}</Text>
            </View>
          </Animated.View>
        </ImageBackground>
      </ViewShot>
      <TextInput
        style={styles.textInputContainer}
        placeholder="Type something..."
        placeholderTextColor="gray"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.closeContainer} onPress={onClose}>
        <Image source={Icons.ic_close} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveContainer} onPress={onCapture}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
