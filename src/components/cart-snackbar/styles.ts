import {colors, fontSizes} from "@utils/theme.ts";
import {StyleSheet} from "react-native";

export const cartSnackbarStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 24,
        left: 16,
        right: 16,
        backgroundColor: colors.snackbarBackground,
        borderRadius: 8,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 6,
    },
    text: {
        color: colors.white,
        fontSize: fontSizes.medium,
    },
    button: {
        marginLeft: 12,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: colors.transparentWhite,
        borderRadius: 6,
    },
    buttonText: {
        color: colors.white,
        fontWeight: '600',
    },
});
