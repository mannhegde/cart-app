import {StyleSheet} from "react-native";
import {colors, fontSizes, spacings} from "@utils/theme.ts";

export const toastStyles = StyleSheet.create({
    toast: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: spacings.xxlarge,
        left: spacings.large,
        right: spacings.large,
        borderRadius: 8,
        padding: spacings.large,
        borderWidth: 1,
        borderColor: colors.grey,
        backgroundColor: colors.black,
        zIndex: 999,
    },
    text: {
        paddingLeft: spacings.medium,
        fontSize: fontSizes.large,
        color: colors.white,
        textAlign: 'center',
        flex: 1,
    },
});
