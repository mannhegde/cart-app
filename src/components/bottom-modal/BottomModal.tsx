import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/stack-types.ts';
import { useNavigation } from '@react-navigation/native';
import { bottomModalStyles } from '@components/bottom-modal/styles.ts';

type Props = {
  canGoBack?: boolean;
  children?: React.ReactNode;
};
const BottomModal: React.FC<Props> = ({ canGoBack, children }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={[StyleSheet.absoluteFill, bottomModalStyles.container]}>
      <Pressable
        style={bottomModalStyles.overLay}
        onPress={canGoBack ? navigation.goBack : undefined}
      />
      <View style={bottomModalStyles.body}>{children}</View>
    </View>
  );
};
export default React.memo(BottomModal);
