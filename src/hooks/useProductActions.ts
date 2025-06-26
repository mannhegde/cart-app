import { Product } from '@/api/types.ts';
import { useCartStore } from '@stores/cartStore';
import {useCallback, useState} from 'react';
import {useToast} from "@/providers/toast/ToastContext";
import {spacings} from "@utils/theme.ts";

export const useProductActions = (product: Product) => {
  const { increment, decrement, remove, getItemQuantity, unmarkOutOfStock } =
    useCartStore();
  const { showToast } = useToast();
  const [notified, setNotified] = useState(false);
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
    showToast({
      message:`${product.name} removed from cart`,
      marginBottom:spacings.huge
    })
  }, [remove, product.id, product.name, showToast]);

  const handleNotify = useCallback(() => {
    setNotified(true);
  }, []);

  return {
    getQuantity,
    handleIncrement,
    handleDecrement,
    handleValidateStock,
    handleRemove,
    handleNotify,
    notified
  };
};
