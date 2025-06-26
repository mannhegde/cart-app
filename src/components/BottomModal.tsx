import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ColorPallet } from '@utils/helper.ts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/stack-types.ts';
import { useNavigation } from '@react-navigation/native';

type Props = {
  canGoBack?: boolean;
  children?: React.ReactNode;
};
const BottomModal: React.FC<Props> = ({ canGoBack, children }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <Pressable
        style={styles.overLay}
        onPress={canGoBack ? navigation.goBack : undefined}
       />
      <View style={styles.body}>{children}</View>
    </View>
  );
};
export default React.memo(BottomModal);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    backgroundColor: ColorPallet.overlay,
  },
  overLay: {
    flex: 1,
  },
  body: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: ColorPallet.white,
    paddingBottom: 16,
  },
});
