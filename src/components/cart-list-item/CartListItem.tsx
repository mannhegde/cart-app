import React from 'react';
import { Text, View } from 'react-native';
import { RefreshCw, Trash2 } from 'lucide-react-native';
import FastImage from 'react-native-fast-image';
import { getInrString } from '@utils/helper.ts';
import { useProductActions } from '@hooks/useProductActions.ts';
import Button from '../button/Button.tsx';
import {cartListItemStyles} from "@components/cart-list-item/styles.ts";
import {CartItem} from "@components/cart-list-item/types.ts";

export type Props = {
  item: CartItem;
};

const CartListItem: React.FC<Props> = ({ item }) => {
  const {
    handleIncrement,
    handleDecrement,
    handleRemove,
    handleValidateStock,
  } = useProductActions(item.product);

  const outOfStock = item.outOfStock;

  return (
    <View style={[cartListItemStyles.container]}>
      <FastImage
        style={cartListItemStyles.image}
        source={{
          uri: item.product.image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <View style={cartListItemStyles.info}>
        <Text style={cartListItemStyles.name}>{item.product.name}</Text>
        <Text style={cartListItemStyles.desc}>{item.product.description}</Text>
        <Text style={[cartListItemStyles.status, outOfStock && cartListItemStyles.outOfStockText]}>
          {outOfStock ? 'Out of stock' : getInrString(item.product.price)}
        </Text>
      </View>

      {outOfStock ? (
        <View style={cartListItemStyles.actions}>
          {handleValidateStock && (
            <Button
              variant={'icon'}
              icon={<RefreshCw size={20} />}
              onPress={handleValidateStock}
            />
          )}
          {handleRemove && (
            <Button
              variant={'icon'}
              icon={<Trash2 size={20} />}
              onPress={handleRemove}
            />
          )}
        </View>
      ) : (
        <View style={cartListItemStyles.availableItemActionsParent}>
          <View style={cartListItemStyles.actions}>
            <Button variant={'outlined'} text={'-'} onPress={handleDecrement} />
            <Text style={cartListItemStyles.qty}>{item.quantity}</Text>
            <Button variant={'outlined'} text={'+'} onPress={handleIncrement} />
          </View>
          {handleRemove && (
            <Button
              variant={'icon'}
              icon={<Trash2 size={20} />}
              onPress={handleRemove}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default React.memo(CartListItem);

