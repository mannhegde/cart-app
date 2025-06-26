import {StyleSheet} from "react-native";
import {colors, spacings} from "@utils/theme.ts";

export const bottomModalStyles =   StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        backgroundColor: colors.overlay,
    },
    overLay: {
        flex: 1,
    },
    body: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: colors.white,
        paddingBottom: spacings.large,
    },
});
