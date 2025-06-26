import React from 'react';
import BottomModal from '@components/bottom-modal/BottomModal.tsx';
import OutOfStockItems from '@widgets/OutOfStockItems.tsx';
import { StyleSheet, View } from 'react-native';
import Button from '@components/button/Button.tsx';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/stack-types.ts';
import { X } from 'lucide-react-native';
import {oosConfModal} from "@screens/modals/out-of-stock-conf-modal/styles.ts";

type Props = NativeStackScreenProps<
  RootStackParamList,
  'cart/confirmation-modal'
>;

const OutOfStockConfirmationModal: React.FC<Props> = ({ route }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { action } = route.params;
  return (
    <BottomModal canGoBack={true}>
      <OutOfStockItems
        type={'oosItems'}
        label={'Remove and proceed'}
        variant={'transparent'}
        rightAction={{
          type: 'icon',
          icon: <X size={20} />,
          action: navigation.goBack,
        }}
      />
      <View style={oosConfModal.buttonContainer}>
        <Button
          text={'Remove and proceed'}
          variant={'primary'}
          onPress={action}
        />
      </View>
    </BottomModal>
  );
};
export default React.memo(OutOfStockConfirmationModal);
