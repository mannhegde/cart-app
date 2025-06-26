export type ThemeVariant =
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'transparent'
    | 'light'
    | 'dark';

type VariantColors = Record<ThemeVariant, string>;

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
    darkGrey: '#666666',
    grey: '#9e9e9e',

    snackbarBackground: '#323232',
    transparentWhite: '#ffffff22',

    overlay: 'rgba(0,0,0,0.5)',
    transparent: 'transparent',
};

export const backgroundColors: VariantColors = {
    success: ColorPallet.lightGreen,
    warning: ColorPallet.lightOrange,
    error: ColorPallet.lightRed,
    info: ColorPallet.lightBlue,
    transparent: ColorPallet.transparent,
    dark: ColorPallet.black,
    light: ColorPallet.white,
};

export const textColors: VariantColors = {
    success: ColorPallet.darkGreen,
    warning: ColorPallet.darkOrange,
    error: ColorPallet.darkRed,
    info: ColorPallet.blue,
    transparent: ColorPallet.black,
    dark: ColorPallet.white,
    light: ColorPallet.black,
};

export const borderColors: VariantColors = {
    success: ColorPallet.mediumGreen,
    warning: ColorPallet.mediumOrange,
    error: ColorPallet.mediumRed,
    info: ColorPallet.mediumBlue,
    transparent: ColorPallet.transparent,
    dark: ColorPallet.black,
    light: ColorPallet.grey,
};

export const spacings = {
    small: 4,
    medium: 8,
    large: 16,
    xlarge: 32,
    xxlarge: 48,
}
export const fontSizes = {
    small: 12,
    medium: 14,
    large: 16,
}

export const radii = {
    small: 4,
    medium: 8,
    large: 16,
};
