import React, { ReactNode } from 'react';
import { commonStyles } from '@utils/common-styles.ts';
import { Pressable, Text } from 'react-native';
import {buttonStyles, buttonTextStyles} from "@components/button/styles.ts";
import {ButtonVariant} from "@components/button/types.ts";

type BaseProps = {
  onPress?: () => void;
  disabled?: boolean;
  variant: ButtonVariant;
};

type TextOnly = { text: string; icon?: never; variant: 'primary' |'secondary' | 'outlined' };
type IconOnly = { icon: ReactNode; text?: never; variant: 'icon' };

type Props = BaseProps & (TextOnly | IconOnly);

const Button: React.FC<Props> = ({
  text,
  icon,
  variant,
  onPress,
  disabled = false,
}) => {
  const isDisabled = disabled || !onPress;
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={[
        commonStyles.button,
        buttonStyles[variant],
        isDisabled ? commonStyles.buttonDisabled : {},
      ]}
    >
      {text ? <Text style={[buttonTextStyles[variant]]}>{text}</Text> : null}
      {icon ? icon : null}
    </Pressable>
  );
};

export default React.memo(Button);
