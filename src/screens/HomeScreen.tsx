import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { RootStackParamList } from '@navigation/stack-types.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { commonStyles } from '@utils/common-styles.ts';
import { useProductsStore } from '@stores/productsStore.ts';
import { FlashList } from '@shopify/flash-list';
import { useCartStore } from '@stores/cartStore.ts';
import CartSnackbar from '@components/cart-snackbar/CartSnackbar.tsx';
import { isRecordEmpty } from '@utils/helper.ts';
import renderProductCard from '@widgets/helpers/renderProductCard.tsx';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { products, error, isLoading, loadProducts } = useProductsStore();
  const { items, getTotal } = useCartStore();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

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
          commonStyles.horizontalPagePadding,
          commonStyles.bottomMarginXXXLarge,
        ]}
      >
        <FlashList
          renderItem={renderProductCard}
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
