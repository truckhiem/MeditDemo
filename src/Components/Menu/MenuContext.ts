import {createContext, useContext} from 'react';
import {MenuData} from './types';

export const MenuContext = createContext<MenuData>({
  showMenu: () => {},
  hideMenu: () => {},
  isVisible: false,
});

export const useMenu = (): MenuData => useContext(MenuContext);
