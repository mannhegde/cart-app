import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { ListRenderItemInfo } from '@shopify/flash-list';
import OutOfStockItems from '@widgets/OutOfStockItems.tsx';
import AvailableItems from '@widgets/AvailableItems.tsx';
import Divider from "@components/Divider.tsx";
import SectionHeader from "@widgets/SectionHeader.tsx";
import {WidgetConfig} from "@widgets/helpers/types.ts";
import RelatedProducts from "@widgets/RelatedProducts.tsx";
import BillDetails from "@widgets/BillDetails.tsx";

export const getWidget = ({
  item,
    index
}: ListRenderItemInfo<WidgetConfig>): ReactElement | null => {
  switch (item.type) {
    case 'sectionHeader':
      return <SectionHeader {...item} key={`${index}-${item.type}`}/>;
    case 'oosItems':
      return <OutOfStockItems {...item} key={`${index}-${item.type}`} />;
    case 'availableItems':
      return <AvailableItems {...item} key={`${index}-${item.type}`} />;
    case 'relatedProducts':
      return <RelatedProducts {...item} key={`${index}-${item.type}`} />;
    case 'billDetailsCard':
      return <BillDetails {...item} key={`${index}-${item.type}`} />;
    case 'promotions':
      return <View key={`${index}-${item.type}`} />;
    default:
      return null;
  }
};

export const getDivider = () => <Divider height={24} />;
