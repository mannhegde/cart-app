import {StyleSheet} from "react-native";
import {ColorPallet, fontSizes, spacings} from "@utils/theme.ts";

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
        borderColor: ColorPallet.grey,
        backgroundColor: ColorPallet.black,
        zIndex: 999,
    },
    text: {
        paddingLeft: spacings.medium,
        fontSize: fontSizes.large,
        color: ColorPallet.white,
        textAlign: 'center',
        flex: 1,
    },
});
