import {StyleSheet} from "react-native";
import {ColorPallet, spacings} from "@utils/theme.ts";

export const bottomModalStyles =   StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        backgroundColor: ColorPallet.overlay,
    },
    overLay: {
        flex: 1,
    },
    body: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: ColorPallet.white,
        paddingBottom: spacings.large,
    },
});
