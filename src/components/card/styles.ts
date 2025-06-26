import {StyleSheet} from "react-native";

export const cardStyles = StyleSheet.create({
    container: { borderRadius: 8 },
    headerContainer: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        flexDirection: 'row',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden',
    },
    body: {
        borderBottomStartRadius: 8,
        borderBottomEndRadius: 8,
        overflow: 'hidden',
    },
});
