import React, { useEffect } from 'react';
import { Animated, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/stack-types';
import { cartSnackbarStyles } from '@utils/styles';
import {getInrString} from "@utils/helper.ts";

type Props = {
  visible: boolean;
  cartValue:number
};

const CartSnackbar = ({ visible, cartValue=0 }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const translateY = React.useRef(new Animated.Value(100)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 100,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [translateY, visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[cartSnackbarStyles.container, { transform: [{ translateY }] }]}
    >
      <Text style={cartSnackbarStyles.text}>Cart Total: {getInrString(cartValue)}</Text>
      <Pressable
        style={cartSnackbarStyles.button}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={cartSnackbarStyles.buttonText}>View Cart</Text>
      </Pressable>
    </Animated.View>
  );
};

export default React.memo(CartSnackbar);
