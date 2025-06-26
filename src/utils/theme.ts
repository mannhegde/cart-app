export type ThemeVariant =
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'transparent'
    | 'light'
    | 'dark';

type VariantColors = Record<ThemeVariant, string>;

export const colors: { [key: string]: string } = {
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
    lightGrey: '#E5E5E5',

    snackbarBackground: '#323232',
    transparentWhite: '#ffffff22',

    overlay: 'rgba(0,0,0,0.5)',
    transparent: 'transparent',
};

export const backgroundColors: VariantColors = {
    success: colors.lightGreen,
    warning: colors.lightOrange,
    error: colors.lightRed,
    info: colors.lightBlue,
    transparent: colors.transparent,
    dark: colors.black,
    light: colors.white,
};

export const textColors: VariantColors = {
    success: colors.darkGreen,
    warning: colors.darkOrange,
    error: colors.darkRed,
    info: colors.blue,
    transparent: colors.black,
    dark: colors.white,
    light: colors.black,
};

export const borderColors: VariantColors = {
    success: colors.mediumGreen,
    warning: colors.mediumOrange,
    error: colors.mediumRed,
    info: colors.mediumBlue,
    transparent: colors.transparent,
    dark: colors.black,
    light: colors.grey,
};

export const spacings = {
    small: 4,
    medium: 8,
    large: 16,
    xlarge: 32,
    xxlarge: 48,
    xxxlarge: 64,
    huge: 96,
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
