import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RefreshCw, Trash2 } from 'lucide-react-native';
import { CartItem } from '@utils/types';
import FastImage from 'react-native-fast-image';
import { getInrString } from '@utils/helper.ts';
import { useProductActions } from '@hooks/useProductActions.ts';
import Button from './Button';

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
    <View style={[styles.container]}>
      <FastImage
        style={styles.image}
        source={{
          uri: item.product.image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <View style={styles.info}>
        <Text style={styles.name}>{item.product.name}</Text>
        <Text style={styles.desc}>{item.product.description}</Text>
        <Text style={[styles.status, outOfStock && styles.outOfStockText]}>
          {outOfStock ? 'Out of stock' : getInrString(item.product.price)}
        </Text>
      </View>

      {outOfStock ? (
        <View style={styles.actions}>
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
        <View style={styles.availableItemActionsParent}>
          <View style={styles.actions}>
            <Button variant={'outlined'} text={'-'} onPress={handleDecrement} />
            <Text style={styles.qty}>{item.quantity}</Text>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 12,
  },
  info: {
    flex: 1,
    paddingRight: 8,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
  },
  desc: {
    fontSize: 12,
    color: '#666',
  },
  status: {
    fontSize: 12,
    marginTop: 4,
  },
  outOfStockText: {
    color: '#d32f2f',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  qty: {
    fontSize: 14,
    fontWeight: '500',
  },
  availableItemActionsParent: {
    alignItems: 'center',
    gap: 8,
  },
});
