import React from 'react';
import { RootStackParamList } from '@navigation/stack-types.ts';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import CartScreen from '@screens/CartScreen';
import OutOfStockConfirmationModal from "@screens/modals/OutOfStockConfirmationModal";

const Stack = createNativeStackNavigator<RootStackParamList>();
const modalOptions: NativeStackNavigationOptions = {
  presentation: 'transparentModal',
  animation: 'fade',
  headerShown: false,
};
const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ orientation: 'portrait' }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Products' }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: 'Your Cart', headerBackButtonDisplayMode:'minimal' }}
      />
      <Stack.Screen
        name="cart/confirmation-modal"
        component={OutOfStockConfirmationModal}
        options={modalOptions}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
