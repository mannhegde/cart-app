export const delay = <T = void>(ms: number, value?: T): Promise<T> =>
  new Promise(resolve => setTimeout(() => resolve(value as T), ms));

export const isRecordEmpty = <T extends Record<string, any>>(obj: T) =>
  Object.keys(obj).length === 0;

export const getInrString = (val?: number | string) => {
  if (!val) return null;
  return `₹${val}`;
};

export const pluralize = (value: number, word: string) => {
  const plural = value === 1 ? word : `${word}s`;
  return `${value} ${plural}`;
};

export const ColorPallet: { [key: string]: string } = {
  lightGreen: '#e6f4ea',
  lightOrange: '#fff4e5',
  lightRed: '#fdecea',
  lightBlue: '#e8f0fe',

  darkGreen: '#256029',
  darkOrange: '#8a5300',
  darkRed: '#b00020',
  blue: '#1a73e8',

  mediumGreen: '#2e7d32',
  mediumOrange: '#ed6c02',
  mediumRed: '#d32f2f',
  mediumBlue: '#0288d1',

  white: '#ffffff',
  black: '#000000',

  overlay: 'rgba(0,0,0,0.5)',
  transparent: 'transparent',
};

export type ThemeVariant =
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'transparent';

type VariantColors = { [K in ThemeVariant]: string };

export const backgroundColors: VariantColors = {
  success: ColorPallet.lightGreen,
  warning: ColorPallet.lightOrange,
  error: ColorPallet.lightRed,
  info: ColorPallet.lightBlue,
  transparent: ColorPallet.transparent,
};

export const textColors: VariantColors = {
  success: ColorPallet.darkGreen,
  warning: ColorPallet.darkOrange,
  error: ColorPallet.darkRed,
  info: ColorPallet.blue,
  transparent: ColorPallet.black,
};

export const borderColors: VariantColors = {
  success: ColorPallet.mediumGreen,
  warning: ColorPallet.mediumOrange,
  error: ColorPallet.mediumRed,
  info: ColorPallet.mediumBlue,
  transparent: ColorPallet.transparent,
};

export type ButtonVariant = 'primary' | 'outlined' | 'icon'|'secondary';
