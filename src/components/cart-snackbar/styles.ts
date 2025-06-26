import {ColorPallet, fontSizes} from "@utils/theme.ts";
import {StyleSheet} from "react-native";

export const cartSnackbarStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 24,
        left: 16,
        right: 16,
        backgroundColor: ColorPallet.snackbarBackground,
        borderRadius: 8,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 6,
    },
    text: {
        color: ColorPallet.white,
        fontSize: fontSizes.medium,
    },
    button: {
        marginLeft: 12,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: ColorPallet.transparentWhite,
        borderRadius: 6,
    },
    buttonText: {
        color: ColorPallet.white,
        fontWeight: '600',
    },
});
