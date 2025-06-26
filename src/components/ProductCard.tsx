import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { getInrString } from '@utils/helper';
import { productCardStyles } from '@utils/styles';
import { Product } from '@utils/types';
import Button from '@components/Button.tsx';
import { useProductActions } from '@hooks/useProductActions.ts';

export type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { handleIncrement, handleDecrement, getQuantity } =
    useProductActions(product);
  const quantity = getQuantity();
  return (
    <View style={productCardStyles.card}>
      <View style={productCardStyles.imageWrapper}>
        <FastImage
          source={{
            uri: product.image,
            priority: FastImage.priority.normal,
          }}
          style={productCardStyles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
        {!product.inStock && (
          <View style={productCardStyles.overlay}>
            <Text style={productCardStyles.outOfStockText}>Out of Stocks</Text>
          </View>
        )}
      </View>

      <Text style={productCardStyles.name}>{product.name}</Text>
      <Text style={productCardStyles.price}>{getInrString(product.price)}</Text>
      <Text style={productCardStyles.description} numberOfLines={2}>
        {product.description}
      </Text>

      {quantity > 0 ? (
        <View style={productCardStyles.actions}>
          <Button
            onPress={handleDecrement}
            text={'-'}
            variant={'outlined'}
            disabled={quantity <= 0}
          />
          <Text style={productCardStyles.qty}>{quantity}</Text>
          <Button
            onPress={handleIncrement}
            text={'+'}
            variant={'outlined'}
            disabled={!product.inStock}
          />
        </View>
      ) : (
        <View style={productCardStyles.actions}>
          <Button
            onPress={handleIncrement}
            text={'Add'}
            variant={'outlined'}
            disabled={!product.inStock}
          />
        </View>
      )}
    </View>
  );
};

export default React.memo(ProductCard);
