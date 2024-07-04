export type MenuData = {
  showMenu: (options: Array<Option>) => unknown;
  hideMenu: () => unknown;
  isVisible?: boolean;
};

export type Option = {
  text: string;
  onSelect: () => unknown;
};
