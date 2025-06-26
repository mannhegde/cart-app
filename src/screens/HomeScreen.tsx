import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { RootStackParamList } from '@navigation/stack-types.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { commonStyles } from '@utils/styles';
import { useProductsStore } from '@stores/productsStore.ts';
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import ProductCard from '@components/ProductCard.tsx';
import { useCartStore } from '@stores/cartStore.ts';
import CartSnackbar from '@components/CartSnackbar.tsx';
import { isRecordEmpty } from '@utils/helper.ts';
import { Product } from '@utils/types.ts';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { products, error, isLoading, loadProducts } = useProductsStore();
  const { increment, decrement, getItemQuantity, items, getTotal } =
    useCartStore();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Product>) => {
      return <ProductCard product={item} />;
    },
    [getItemQuantity, increment, decrement],
  );

  if (error) {
    return (
      <View style={commonStyles.container}>
        <View style={commonStyles.centered}>
          <Text style={commonStyles.errorText}>{error}</Text>
        </View>
      </View>
    );
  }
  if (isLoading) {
    return (
      <View style={commonStyles.container}>
        <View style={commonStyles.centered}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    );
  }

  return (
    <View style={commonStyles.container}>
      <View
        style={[
          commonStyles.container,
          commonStyles.pagePadding,
          commonStyles.bottomMargin,
        ]}
      >
        <FlashList
          renderItem={renderItem}
          data={products}
          keyExtractor={(item, index) => `${index}-${item.id}`}
          extraData={items}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={100}
        />
      </View>
      <CartSnackbar visible={!isRecordEmpty(items)} cartValue={getTotal()} />
    </View>
  );
};

export default React.memo(HomeScreen);
