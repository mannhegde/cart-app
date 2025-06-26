import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  commonStyles } from '@utils/common-styles.ts';
import {
  backgroundColors,
  borderColors,
  textColors,
  ThemeVariant,
} from '@utils/theme.ts';
import Button from '@components/button/Button.tsx';
import Element = React.JSX.Element;
import {cardStyles} from "@components/card/styles.ts";

export type CardProps = {
  variant: ThemeVariant;
  title: string;
  rightAction?:
    | {
        type: 'text';
        text: string;
        action?: () => void;
      }
    | {
        type: 'icon';
        icon: Element;
        action?: () => void;
      };
  children: React.ReactNode;
};

const getCardStyles = ({
  variant,
  rightAction: rAction,
}: Pick<CardProps, 'variant' | 'rightAction'>) => {
  return StyleSheet.create({
    container: {
      borderColor: borderColors[variant],
      borderWidth: variant === 'transparent' ? 0 : 1,
    },
    header: {
      backgroundColor: backgroundColors[variant],
    },
    headerText: { color: textColors[variant] },
    rightAction: {
      color: textColors[variant],
      fontWeight: rAction?.action ? 'bold' : 'normal',
      fontSize: 14,
    },
  });
};

const Card: React.FC<CardProps> = ({
  variant,
  title,
  rightAction,
  children,
}) => {
  const customStyles = getCardStyles({ variant, rightAction });

  return (
    <View style={[cardStyles.container, customStyles.container]}>
      <View style={[cardStyles.headerContainer, customStyles.header]}>
        <View style={commonStyles.container}>
          <Text style={[commonStyles.boldText, customStyles.headerText]}>
            {title}
          </Text>
        </View>

        {rightAction?.type==='text' ? (
          <Button
            variant={'secondary'}
            text={rightAction?.text}
            onPress={rightAction.action}
          />
        ) : (
          <Button
            variant={'icon'}
            icon={rightAction?.icon}
            onPress={rightAction?.action}
          />
        )}
      </View>
      <View style={cardStyles.body}>{children}</View>
    </View>
  );
};

export default React.memo(Card);
