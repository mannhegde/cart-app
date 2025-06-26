import CartListItem from '@components/cart-list-item/CartListItem.tsx';
import {CartItem} from "@components/cart-list-item/types.ts";

const renderCartItem = (item: CartItem) => {
  return <CartListItem item={item} key={item.product.id.toString()} />;
};
export default renderCartItem;
