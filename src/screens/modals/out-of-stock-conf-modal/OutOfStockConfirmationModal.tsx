import React, { useCallback, useMemo } from 'react';
import BottomModal from '@components/bottom-modal/BottomModal.tsx';
import { Text, View } from 'react-native';
import Button from '@components/button/Button.tsx';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/stack-types.ts';
import { oosConfModal } from '@screens/modals/out-of-stock-conf-modal/styles.ts';
import { useCartStore } from '@stores/cartStore.ts';
import { commonStyles } from '@utils/common-styles.ts';
import { X } from 'lucide-react-native';
import CartListItem from '@components/cart-list-item/CartListItem.tsx';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'cart/confirmation-modal'
>;

const OutOfStockConfirmationModal: React.FC<Props> = ({
  route,
  navigation,
}) => {
  const { action } = route.params;

  const items = useCartStore(state => state.items);

  const outOfStockItems = useMemo(
    () => Object.values(items).filter(item => item.outOfStock),
    [items],
  );
  const handlePrimaryAction = useCallback(() => {
    navigation.goBack();
    action();
  }, [action, navigation]);
  return (
    <BottomModal canGoBack={true}>
      <View style={oosConfModal.header}>
        <Text style={commonStyles.boldText}>Remove and proceed</Text>
        <Button
          icon={<X size={24} />}
          variant={'icon'}
          onPress={navigation.goBack}
        />
      </View>
      <View>
        {outOfStockItems.map(item => {
          return (
            <CartListItem key={item.product.id} item={item} suggestNotify />
          );
        })}
      </View>
      <View style={oosConfModal.buttonContainer}>
        <Button
          text={'Remove and proceed'}
          variant={'primary'}
          onPress={handlePrimaryAction}
        />
      </View>
    </BottomModal>
  );
};
export default React.memo(OutOfStockConfirmationModal);
