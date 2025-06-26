import { StyleSheet } from 'react-native';
import {colors, spacings} from '@utils/theme';

export const oosConfModal = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacings.large,
        paddingVertical: spacings.medium,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
    },
    buttonContainer: {
        marginTop: spacings.large,
        paddingHorizontal: spacings.large,
    },
});
