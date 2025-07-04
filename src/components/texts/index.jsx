import {View, Text} from 'react-native';
import React from 'react';
import {appStyles, colors} from '../../services/utilities';

const Texts = ({
  children,
  //heading
  isH1,
  isH2,
  isH3,
  isH4,
  isH5,
  isH6,
  //body
  isLarge,
  isMedium,
  isRegular,
  isSmall,
  isTiny,
  isXTiny,
  style,

  colorPrimary,
  colorSecondary,

  textColor1,
  textColor2,
  isWhite,

  font1Regular,
  font1Light,
  font1Medium,
  font1Bold,
  font2Regular,
  font2Light,
  font2Medium,
  font2Bold,
  font2ExtraBold,

  alignCenter,
  ...props
}) => {
  return (
    <Text
      style={[
        //heading
        isH1 && appStyles.h1,
        isH2 && appStyles.h2,
        isH3 && appStyles.h3,
        isH4 && appStyles.h4,
        isH5 && appStyles.h5,
        isH6 && appStyles.h6,
        //body
        isLarge && appStyles.textLarge,
        isMedium && appStyles.textMedium,
        isRegular && appStyles.textRegular,
        isSmall && appStyles.textSmall,
        isTiny && appStyles.textTiny,
        isXTiny && appStyles.textXTiny,
        //others
        colorPrimary && appStyles.textPrimaryColor,
        colorSecondary && appStyles.textSecondaryColor,

        textColor1 && appStyles.textColor1,
        textColor2 && appStyles.textColor2,

        font1Regular && appStyles.textFont1Regular,
        font1Light && appStyles.textFont1Light,
        font1Medium && appStyles.textFont1Medium,
        font1Bold && appStyles.textFont1Bold,

        font2Regular && appStyles.textFont2Regular,
        font2Light && appStyles.textFont2Light,
        font2Medium && appStyles.textFont2Medium,
        font2Bold && appStyles.textFont2Bold,
        font2ExtraBold && appStyles.textFont2ExtraBold,
        alignCenter && appStyles.textCenter,

        isWhite && appStyles.textWhite,
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default Texts;
