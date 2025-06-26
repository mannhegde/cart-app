import Card from '@components/card/Card.tsx';
import { View } from 'react-native';
import React, { useMemo } from 'react';
import { useCartStore } from '@stores/cartStore.ts';
import renderCartItem from '@widgets/helpers/renderCartListItem.tsx';
import {noop, pluralize} from '@utils/helper.ts';
import {WidgetConfig} from "@widgets/helpers/types.ts";

const AvailableItems: React.FC<WidgetConfig> = ({ label }) => {
  const items = useCartStore(state => state.items);

  const availableStock = useMemo(
    () => Object.values(items).filter(item => !item.outOfStock),
    [items],
  );

  return (
    <Card
      title={label.toLocaleUpperCase()}
      rightAction={{
        type: 'text',
        text: pluralize(availableStock.length, 'item'),
          action:noop
      }}
      variant={'info'}
    >
      <View>{availableStock.map(renderCartItem)}</View>
    </Card>
  );
};

export default React.memo(AvailableItems);
