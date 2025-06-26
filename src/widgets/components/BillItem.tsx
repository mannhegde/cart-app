import React from 'react';
import {Text, View} from "react-native";
import {spacings} from "@utils/theme.ts";
import {commonStyles} from "@utils/common-styles.ts";

type Props = {
    label: string;
    description: string;
    isBold?: boolean;
}
const BillItem:React.FC<Props> = ({label,description,isBold}) => {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:spacings.medium}}>
            <Text style={isBold?commonStyles.boldText:{}}>{label}</Text>
            <Text style={isBold?commonStyles.boldText:{}}>{description}</Text>
        </View>
    )
}

export default React.memo(BillItem);
