import {View, Text} from 'react-native';
import React from 'react';
import {height as h, width as w} from 'react-native-dimension';

const Spacer = ({
  isTiny,
  isBasic,
  isSmall,
  isLarge,
  width,
  height,
  isHorizontal,
}) => {
  const defaultHeight = isLarge
    ? h(5)
    : isBasic
    ? h(2.5)
    : isSmall
    ? h(1.25)
    : isTiny
    ? h(0.625)
    : height;
  const defaultWidth = isLarge
    ? w(10)
    : isBasic
    ? w(5)
    : isSmall
    ? w(2.5)
    : isTiny
    ? w(1.25)
    : width;
  return (
    <View
      style={{
        height: !isHorizontal && defaultHeight,
        width: isHorizontal || (width && defaultWidth),
      }}
    />
  );
};

export default Spacer;
