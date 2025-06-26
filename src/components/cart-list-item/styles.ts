import { StyleSheet } from 'react-native';
import { colors, spacings, fontSizes } from '@utils/theme';

export const cartListItemStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: spacings.large,
        borderBottomWidth: 0.5,
        borderColor: colors.lightGrey,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 6,
        marginRight: spacings.large,
    },
    info: {
        flex: 1,
        paddingRight: spacings.medium,
    },
    name: {
        fontWeight: '600',
        fontSize: fontSizes.medium,
    },
    desc: {
        fontSize: fontSizes.small,
        color: colors.darkGrey,
    },
    status: {
        fontSize: fontSizes.small,
        marginTop: 4,
    },
    outOfStockText: {
        color: colors.mediumRed,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacings.medium,
    },
    qty: {
        fontSize: fontSizes.medium,
        fontWeight: '500',
    },
    availableItemActionsParent: {
        alignItems: 'center',
        gap: spacings.medium,
    },
});
