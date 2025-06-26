import {colors, fontSizes} from '@/utils/theme';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ButtonVariant} from "@components/button/types.ts";

export const buttonStyles: Record<ButtonVariant, ViewStyle> = StyleSheet.create({
    primary: {
        backgroundColor: colors.darkGreen,
        marginBottom: 24,
        padding: 20,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outlined: {
        backgroundColor: colors.white,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.grey,
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {},
    secondary: {
        paddingHorizontal: 4,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const buttonTextStyles: Record<ButtonVariant, TextStyle> = StyleSheet.create({
    primary: {
        color: colors.white,
        fontSize: fontSizes.medium,
        fontWeight: 'bold',
    },
    outlined: {
        color: colors.black,
    },
    icon: {},
    secondary: {
        fontSize: fontSizes.medium,
        fontWeight: 'bold',
    },
});
