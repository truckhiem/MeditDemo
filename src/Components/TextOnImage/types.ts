export type TextOnImageData = {
  showTextOnImage: (image: ImageOption) => unknown;
  hideTextOnImage: () => unknown;
  isVisible?: boolean;
};

export type ImageOption = {
  path: string;
  onFinish: (path: string) => unknown;
};
