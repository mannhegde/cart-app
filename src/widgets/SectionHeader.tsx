import React from 'react';
import { commonStyles } from '@utils/common-styles.ts';
import { Text } from 'react-native';
import {WidgetConfig} from "@widgets/helpers/types.ts";

const SectionHeader: React.FC<WidgetConfig> = ({ label }) => {
  return (
    <Text style={[commonStyles.boldText]}>
      {label}
    </Text>
  );
};

export default React.memo(SectionHeader);
