import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { WidgetConfig } from '@utils/types.ts';
import { ListRenderItemInfo } from '@shopify/flash-list';

import OutOfStockItems from '@widgets/OutOfStockItems.tsx';
import AvailableItems from '@widgets/AvailableItems.tsx';
import Divider from "@components/Divider.tsx";

export const getWidget = ({
  item,
    index
}: ListRenderItemInfo<WidgetConfig>): ReactElement | null => {
  switch (item.type) {
    case 'oosItems':
      return <OutOfStockItems {...item} key={`${index}-${item.type}`} />;
    case 'availableItems':
      return <AvailableItems {...item} key={`${index}-${item.type}`} />;
    case 'relatedProducts':
      return <View key={`${index}-${item.type}`} />;
    case 'billDetailsCard':
      return <View key={`${index}-${item.type}`} />;
    case 'promotions':
      return <View key={`${index}-${item.type}`} />;
    default:
      return null;
  }
};

export const getDivider = () => <Divider height={24} />;
