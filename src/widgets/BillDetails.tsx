import React from 'react';
import { WidgetConfig } from '@widgets/helpers/types.ts';
import Card from '@components/card/Card.tsx';
import { View } from 'react-native';

const BillDetails: React.FC<WidgetConfig> = ({ label }) => {
  return (
    <Card title={label} variant={'light'}>
      <View />
    </Card>
  );
};

export default React.memo(BillDetails);
