import React, {FC, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {MenuContext} from './MenuContext';
import {styles} from './styles';
import {Option} from './types';

export const MenuProvider: FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const showMenu = (menuOptions: Array<Option>) => {
    setOptions(menuOptions);
    setIsVisible(true);
  };

  const hideMenu = () => {
    setOptions([]);
    setIsVisible(false);
  };

  const onPressOption = (option: Option) => {
    hideMenu();
    option.onSelect();
  };

  return (
    <MenuContext.Provider value={{showMenu, hideMenu, isVisible}}>
      {children}

      {isVisible && (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => hideMenu()}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
          {options.map(option => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => onPressOption(option)}
              key={option.text}>
              <Text>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </MenuContext.Provider>
  );
};
