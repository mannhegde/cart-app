import Card, { CardProps } from '@components/Card.tsx';
import { View } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import { WidgetConfig } from '@utils/types.ts';
import { useCartStore } from '@stores/cartStore.ts';
import renderCartItem from '@widgets/helpers/renderCartListItem.tsx';

const OutOfStockItems: React.FC<
  WidgetConfig & Partial<Pick<CardProps, 'rightAction' | 'variant'>>
> = ({ label, variant, rightAction }) => {
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
      rightAction={
        rightAction || {
          type: 'text',
          action: handleRemoveOutOfStockItems,
          text: 'Remove All',
        }
      }
      variant={variant || 'error'}
    >
      <View>{outOfStockItems.map(renderCartItem)}</View>
    </Card>
  ) : null;
};

export default React.memo(OutOfStockItems);
