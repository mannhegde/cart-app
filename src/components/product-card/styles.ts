import {StyleSheet} from "react-native";
import {colors, fontSizes, spacings} from "@utils/theme.ts";

export const productCardStyles = StyleSheet.create({
    card: {
        padding: spacings.large,
        margin: 8,
        backgroundColor: colors.white,
        borderRadius: 10,
        elevation: 2,
    },
    imageWrapper: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 160,
        borderRadius: 6,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.overlay,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outOfStockText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: fontSizes.medium,
    },
    name: {
        fontSize: fontSizes.large,
        fontWeight: '600',
        marginTop: spacings.medium,
    },
    description: {
        fontSize: fontSizes.small,
        color: colors.textSecondary,
    },
    priceWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        gap: 4,
        marginBottom: spacings.small,
    },
    price: {
        fontSize: fontSizes.medium,
        color: colors.darkGreen,
    },
    slashedPrice: {
        fontSize: fontSizes.small,
        color: colors.grey,
        textDecorationLine: 'line-through',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.border,
        marginHorizontal: 8,
    },
    qty: {
        fontSize: fontSizes.large,
        minWidth: 20,
        textAlign: 'center',
    },
});
