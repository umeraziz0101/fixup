import {View, Text, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {appStyles, colors} from '../../services/utilities';
import {height, width} from 'react-native-dimension';
import Texts from '../texts';
export const ColoredGradient = ({
  onPress,
  title,
  containerStyle,
  gradientStyle,
  gradientColors,
  notGradient,
  shadowWhite,
  titleStyle,
}) => {
  const _colors = notGradient
    ? [colors.appColor2, colors.appColor2]
    : // ? [colors.appColor1, colors.appColor1]
      gradientColors || colors.appGradiant1;

  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          marginHorizontal: width(5),
          borderRadius: 100,
          // backgroundColor: colors.appBackgroundColor1,
          backgroundColor: colors.appColor2,
        },
        shadowWhite && [
          appStyles.shadowDark,
          {shadowColor: colors.appBackgroundColor1},
        ],
        containerStyle,
      ]}>
      <LinearGradient
        colors={_colors}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.5]}
        style={[
          {
            height: height(6),
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          },
          gradientStyle,
        ]}>
        <Texts isMedium font1Bold style={titleStyle}>
          {title}
        </Texts>
      </LinearGradient>
    </Pressable>
  );
};
