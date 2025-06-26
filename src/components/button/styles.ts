import {ColorPallet, fontSizes} from '@/utils/theme';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ButtonVariant} from "@components/button/types.ts";

export const buttonStyles: Record<ButtonVariant, ViewStyle> = StyleSheet.create({
    primary: {
        backgroundColor: ColorPallet.darkGreen,
        marginBottom: 24,
        padding: 20,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outlined: {
        backgroundColor: ColorPallet.white,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: ColorPallet.grey,
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
        color: ColorPallet.white,
        fontSize: fontSizes.medium,
        fontWeight: 'bold',
    },
    outlined: {
        color: ColorPallet.black,
    },
    icon: {},
    secondary: {
        fontSize: fontSizes.medium,
        fontWeight: 'bold',
    },
});
