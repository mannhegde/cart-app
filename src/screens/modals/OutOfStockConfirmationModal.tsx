import React from 'react';
import BottomModal from '@components/BottomModal';
import OutOfStockItems from '@widgets/OutOfStockItems.tsx';
import { StyleSheet, View } from 'react-native';
import Button from '@components/Button.tsx';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/stack-types.ts';
import { X } from 'lucide-react-native';

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
      <View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
});
