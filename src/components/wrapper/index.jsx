import {StyleSheet, View} from 'react-native';
import React from 'react';
import {appStyles, colors} from '../../services/utilities';
import {width, height, totalSize} from 'react-native-dimension';

const Wrapper = ({
  children,
  flex,
  isMain,
  center,
  isColored,
  isBordered,
  backgroundColor1,
  backgroundColor2,

  // marginHorizontal
  marginHorizontalLarge,
  marginHorizontalMedium,
  marginHorizontalBase,
  marginHorizontalSmall,
  marginHorizontalTiny,
  marginHorizontalZero,

  // paddingHorizontal
  paddingHorizontalLarge,
  paddingHorizontalMedium,
  paddingHorizontalBase,
  paddingHorizontalSmall,
  paddingHorizontalTiny,
  paddingHorizontalZero,

  // marginVertical
  marginVerticalLarge,
  marginVerticalMedium,
  marginVerticalBase,
  marginVerticalSmall,
  marginVerticalTiny,
  marginVerticalZero,

  // paddingVertical
  paddingVerticalLarge,
  paddingVerticalMedium,
  paddingVerticalBase,
  paddingVerticalSmall,
  paddingVerticalTiny,
  paddingVerticalZero,

  alignItemsCenter,
  justifyContentCenter,
  justifyContentSpacebetween,
  justifyContentSpaceevenly,
  flexDirectionRow,
  flexWrapWrap,
  style,
}) => {
  return (
    <View
      style={[
        {flex: flex},
        isMain && appStyles.mainContainer,
        center && appStyles.center,

        alignItemsCenter && {alignItems: 'center'},
        justifyContentCenter && {justifyContent: 'center'},
        justifyContentSpacebetween && {justifyContent: 'space-between'},
        justifyContentSpaceevenly && {justifyContent: 'space-evenly'},
        flexDirectionRow && {flexDirection: 'row'},
        flexWrapWrap && {flexWrap: 'wrap'},
        isColored && styles.colored,
        isBordered && styles.bordered,
        backgroundColor1 && {backgroundColor: colors.appBackgroundColor1},
        backgroundColor2 && {backgroundColor: colors.appBackgroundColor2},
        // marginHorizontal
        marginHorizontalLarge && {marginHorizontal: width(10)},
        marginHorizontalMedium && {marginHorizontal: width(7.5)},
        marginHorizontalBase && {marginHorizontal: width(5)},
        marginHorizontalSmall && {marginHorizontal: width(2.5)},
        marginHorizontalTiny && {marginHorizontal: width(1.25)},
        marginHorizontalZero && {marginHorizontal: 0},

        // paddingHorizontal
        paddingHorizontalLarge && {paddingHorizontal: width(10)},
        paddingHorizontalMedium && {paddingHorizontal: width(1.5)},
        paddingHorizontalBase && {paddingHorizontal: width(5)},
        paddingHorizontalSmall && {paddingHorizontal: width(2.5)},
        paddingHorizontalTiny && {paddingHorizontal: width(1.25)},
        paddingHorizontalZero && {paddingHorizontal: 0},

        // marginVertical
        marginVerticalLarge && {marginVertical: height(5)},
        marginVerticalMedium && {marginVertical: height(3.75)},
        marginVerticalBase && {marginVertical: height(2.5)},
        marginVerticalSmall && {marginVertical: height(1.25)},
        marginVerticalTiny && {marginVertical: height(0.625)},
        marginVerticalZero && {marginVertical: 0},

        // paddingVertical
        paddingVerticalLarge && {paddingVertical: height(5)},
        paddingVerticalMedium && {paddingVertical: height(3.75)},
        paddingVerticalBase && {paddingVertical: height(2.5)},
        paddingVerticalSmall && {paddingVertical: height(1.25)},
        paddingVerticalTiny && {paddingVertical: height(0.625)},
        paddingVerticalZero && {paddingVertical: 0},
        style,
      ]}>
      {children}
    </View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  colored: {
    marginHorizontal: width(5),
    borderRadius: 10,
    backgroundColor: colors.appBackgroundColor2,
    paddingVertical: height(2.5),
    paddingHorizontal: width(5),
  },
  bordered: {
    marginHorizontal: width(5),
    borderRadius: 10,
    borderWidth: 1,
    // backgroundColor: colors.appBackgroundColor3,
    paddingVertical: height(2.5),
    paddingHorizontal: width(5),
  },
});
