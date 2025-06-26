import Card from '@components/Card.tsx';
import { View } from 'react-native';
import React, { useMemo } from 'react';
import { WidgetConfig } from '@utils/types.ts';
import { useCartStore } from '@stores/cartStore.ts';
import renderCartItem from '@widgets/helpers/renderCartListItem.tsx';
import { pluralize } from '@utils/helper.ts';

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
        text: pluralize(availableStock.length, 'item'),
      }}
      variant={'info'}
    >
      <View>{availableStock.map(renderCartItem)}</View>
    </Card>
  );
};

export default React.memo(AvailableItems);
