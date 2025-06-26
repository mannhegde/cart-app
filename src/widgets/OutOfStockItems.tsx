import Card from '@components/card/Card.tsx';
import { View } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import { useCartStore } from '@stores/cartStore.ts';
import renderCartItem from '@widgets/helpers/renderCartListItem.tsx';
import { WidgetConfig } from '@widgets/helpers/types.ts';

const OutOfStockItems: React.FC<WidgetConfig> = ({ label }) => {
  const items = useCartStore(state => state.items);
  const remove = useCartStore(state => state.remove);

  const outOfStockItems = useMemo(
    () => Object.values(items).filter(item => item.outOfStock),
    [items],
  );

  const handleRemoveOutOfStockItems = useCallback(() => {
    remove(outOfStockItems.map(item => item.product.id));
  }, [outOfStockItems, remove]);

  return outOfStockItems.length > 0 ? (
    <Card
      title={label.toLocaleUpperCase()}
      rightAction={{
        type: 'text',
        action: handleRemoveOutOfStockItems,
        text: 'Remove All',
      }}
      variant={'error'}
    >
      <View>{outOfStockItems.map(renderCartItem)}</View>
    </Card>
  ) : null;
};

export default React.memo(OutOfStockItems);
