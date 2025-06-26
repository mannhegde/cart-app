import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/stack-types.ts';
import { commonStyles } from '@utils/styles';
import { useCartStore } from '@stores/cartStore.ts';
import Button from '@components/Button.tsx';
import { useWidgets } from '@hooks/useWidgets.ts';
import { FlashList } from '@shopify/flash-list';
import { getDivider, getWidget } from '@widgets/helpers/getWidget.tsx';
import Divider from '@components/Divider.tsx';

type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'Cart'>;

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const {
    validateCart,
    isValidating,
    getItems,
    items,
    getOutOfStockItems,
    remove,
  } = useCartStore();
  const { data } = useWidgets();

  useEffect(() => {
    validateCart();
  }, [validateCart]);

  const handleModalConfirmation = useCallback(async () => {
    remove(getOutOfStockItems().map(item => item.product.id));
  }, [getOutOfStockItems, remove]);

  const handleValidateAndPay = useCallback(async () => {
    await validateCart();
    const outOfStockItems = getOutOfStockItems();
    if (outOfStockItems.length > 0) {
      navigation.navigate({
        name: 'cart/confirmation-modal',
        params: {
          action: handleModalConfirmation,
        },
      });
    }
  }, [getOutOfStockItems, handleModalConfirmation, navigation, validateCart]);

  if (getItems().length === 0) {
    return (
      <View style={[commonStyles.container, commonStyles.centered]}>
        <Text style={commonStyles.boldText}>Your cart is empty</Text>
        <Divider height={24} />
        <Button
          text={'Continue shopping'}
          onPress={navigation.goBack}
          variant={'primary'}
        />
      </View>
    );
  }

  if (isValidating) {
    return (
      <View style={[commonStyles.container, commonStyles.centered]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={[commonStyles.container, commonStyles.pagePadding]}>
      <View style={commonStyles.container}>
        <Text style={[commonStyles.boldText, commonStyles.paddingVertical]}>
          Review your cart
        </Text>
        <FlashList
          data={data}
          renderItem={getWidget}
          extraData={items}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={getDivider}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={400}
        />
      </View>
      <View>
        <Button
          text={'Proceed to pay'}
          variant={'primary'}
          onPress={handleValidateAndPay}
          disabled={getOutOfStockItems().length > 0}
        />
      </View>
    </View>
  );
};

export default React.memo(CartScreen);
