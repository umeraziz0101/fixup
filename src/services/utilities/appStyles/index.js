import {StyleSheet} from 'react-native';
import {colors} from '../colors';
import {fontSizes} from '../sizes';
import {fonts} from '../fonts';

export const appStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  //heading
  h1: {
    color: colors.appTextColor1,
    fontSize: fontSizes.h1,
    fontFamily: fonts.appFont1Bold,
  },
  h2: {
    color: colors.appTextColor1,
    fontSize: fontSizes.h2,
    fontFamily: fonts.appFont1Bold,
  },
  h3: {
    color: colors.appTextColor1,
    fontSize: fontSizes.h3,
    fontFamily: fonts.appFont1Bold,
  },
  h4: {
    color: colors.appTextColor1,
    fontSize: fontSizes.h4,
    fontFamily: fonts.appFont1Bold,
  },
  h5: {
    color: colors.appTextColor1,
    fontSize: fontSizes.h5,
    fontFamily: fonts.appFont1Bold,
  },
  h6: {
    color: colors.appTextColor1,
    fontSize: fontSizes.h6,
    fontFamily: fonts.appFont1Bold,
  },

  //body
  textLarge: {
    color: colors.appTextColor1,
    fontSize: fontSizes.large,
    fontFamily: fonts.appFont1Regular,
  },
  textMedium: {
    color: colors.appTextColor1,
    fontSize: fontSizes.medium,
    fontFamily: fonts.appFont1Regular,
  },
  textRegular: {
    color: colors.appTextColor1,
    fontSize: fontSizes.regular,
    fontFamily: fonts.appFont1Regular,
  },
  textSmall: {
    color: colors.appTextColor1,
    fontSize: fontSizes.small,
    fontFamily: fonts.appFont1Regular,
  },
  textTiny: {
    color: colors.appTextColor1,
    fontSize: fontSizes.tiny,
    fontFamily: fonts.appFont1Regular,
  },
  textXTiny: {
    color: colors.appTextColor1,
    fontSize: fontSizes.xtiny,
    fontFamily: fonts.appFont1Regular,
  },
  // text fonts 1

  textFont1Regular: {
    fontFamily: fonts.appFont1Regular,
  },
  textFont1Light: {
    fontFamily: fonts.appFont1Light,
  },
  textFont1Medium: {
    fontFamily: fonts.appFont1Medium,
  },
  textFont1Bold: {
    fontFamily: fonts.appFont1Bold,
  },
  // text fonts 2
  textFont2Regular: {
    fontFamily: fonts.appFont2Regular,
  },
  textFont2Light: {
    fontFamily: fonts.appFont2Light,
  },
  textFont2Medium: {
    fontFamily: fonts.appFont2Medium,
  },
  textFont2Bold: {
    fontFamily: fonts.appFont2Bold,
  },
  textFont2ExtraBold: {
    fontFamily: fonts.appFont2ExtraBold,
  },

  // text colors
  textPrimaryColor: {
    color: colors.appColor1,
  },
  textSecondaryColor: {
    color: colors.appColor2,
  },
  textColor1: {
    color: colors.appTextColor1,
  },
  textColor2: {
    color: colors.appTextColor2,
  },
  textWhite: {
    color: colors.appTextWhite,
  },
  // text
  textCenter: {
    textAlign: 'center',
  },
  //shadow
  shadowExtraLight: {
    shadowColor: '#00000080',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    elevation: 1.5,
  },
  shadowLight: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 3,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shadowColored: {
    shadowColor: colors.appColor1,
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  shadowDark: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.425,
    shadowRadius: 8.27,
    elevation: 10,
  },
  shadowExtraDark: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 24,
  },
});
