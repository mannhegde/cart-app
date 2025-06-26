import React from 'react';
import { Text, View } from 'react-native';
import {
  backgroundColors,
  borderColors,
  textColors,
  ThemeVariant,
} from '@utils/theme.ts';
import { Info } from 'lucide-react-native';
import { toastStyles } from '@/providers/toast/styles.ts';

type Props = {
  message: string;
  variant: ThemeVariant;
  marginBottom?: number;
};

const Toast: React.FC<Props> = ({ message, variant, marginBottom }) => {
  return (
    <View
      style={[
        toastStyles.toast,
        {
          backgroundColor: backgroundColors[variant],
          borderColor: borderColors[variant],
        },
        marginBottom ? { bottom: marginBottom } : {},
      ]}
    >
      <Info size={16} color={textColors[variant]} />
      <Text style={[toastStyles.text, { color: textColors[variant] }]}>
        {message}
      </Text>
    </View>
  );
};

export default Toast;
