import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {width, height, totalSize} from 'react-native-dimension';
import {colors} from '../../services/utilities';
import LinearGradient from 'react-native-linear-gradient';

export const Custom = ({source, size, onPress, style, color}) => {
  const defaultSize = size || totalSize(2.5);
  return (
    <Pressable onPress={onPress} disabled={!onPress}>
      <Image
        source={source}
        style={[
          {height: defaultSize, width: defaultSize, tintColor: color},
          style,
        ]}
      />
    </Pressable>
  );
};

export const Button = ({
  onPress,
  buttonSize,
  gradientColors,
  customIcon,
  iconSize,
  buttonStyle,
  containerStyle,
  buttonColor,
}) => {
  const defaultButtonSize = buttonSize || totalSize(5);
  const defaultIconSize = iconSize || totalSize(3.5);
  const defaultColors = buttonColor
    ? [buttonColor, buttonColor]
    : gradientColors || colors.appGradiant2;
  return (
    <Pressable
      onPress={onPress}
      style={[
        {borderRadius: 100, backgroundColor: colors.appBackgroundColor1},
        containerStyle,
      ]}>
      <LinearGradient
        colors={defaultColors}
        style={[
          {
            height: defaultButtonSize,
            width: defaultButtonSize,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          },
          buttonStyle,
        ]}>
        <Custom source={customIcon} size={defaultIconSize} />
      </LinearGradient>
    </Pressable>
  );
};
