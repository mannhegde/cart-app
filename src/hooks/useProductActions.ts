import { Product } from '@utils/types.ts';
import { useCartStore } from '@stores/cartStore.ts';
import { useCallback } from 'react';

export const useProductActions = (product: Product) => {
  const { increment, decrement, remove, getItemQuantity, unmarkOutOfStock } =
    useCartStore();


  const getQuantity = useCallback(
    () => getItemQuantity(product.id),
    [getItemQuantity, product.id],
  );

  const handleValidateStock = useCallback(() => {
    unmarkOutOfStock([product.id]);
  }, [product.id, unmarkOutOfStock]);

  const handleIncrement = useCallback(
    () => increment(product),
    [increment, product],
  );

  const handleDecrement = useCallback(
    () => decrement(product.id),
    [decrement, product],
  );

  const handleRemove = useCallback(() => {
    remove([product.id]);
  }, [remove, product.id]);

  const handleNotify = useCallback(() => {}, []);

  return {
    getQuantity,
    handleIncrement,
    handleDecrement,
    handleValidateStock,
    handleRemove,
    handleNotify
  };
};
