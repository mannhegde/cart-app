import { CartItem } from '@utils/types.ts';
import CartListItem from '@components/CartListItem.tsx';

const renderCartItem = (item: CartItem) => {
  return <CartListItem item={item} key={item.product.id.toString()} />;
};
export default renderCartItem;
