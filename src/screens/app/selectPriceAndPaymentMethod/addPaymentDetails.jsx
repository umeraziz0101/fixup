import React from 'react';
import Modal from 'react-native-modal';
import {
  Buttons,
  Icons,
  Spacer,
  TextInputs,
  Texts,
  Wrapper,
} from '../../../components';
import {
  AppIcons,
  appStyles,
  colors,
  fonts,
  fontSizes,
} from '../../../services/utilities';
import {height, width, totalSize} from 'react-native-dimension';
const AddPaymentDetails = ({isVisible, toggle, onPressSave}) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={toggle} style={{margin: 0}}>
      <Wrapper backgroundColor1 isColored>
        <Wrapper alignItemsCenter style={{marginTop: -width(17.5)}}>
          <Icons.Button
            customIcon={AppIcons.payment}
            buttonSize={width(25)}
            iconSize={width(12.5)}
            containerStyle={[
              appStyles.shadowDark,
              {shadowColor: colors.appColor1},
            ]}
          />
        </Wrapper>
        <Spacer isSmall />
        <Texts isMedium font2Regular alignCenter>
          Add New Details
        </Texts>
        <Spacer isSmall />
        <Texts isMedium font2Medium alignCenter>
          Please Enter Your Payment Details
        </Texts>
        <Spacer isSmall />
        <Wrapper
          isColored
          backgroundColor1
          marginHorizontalZero
          style={[
            appStyles.shadowDark,
            {shadowColor: colors.appColor3, shadowOpacity: 1},
          ]}>
          <TextInput1 placeholder="Card holder name" />
          <Spacer isSmall />
          <TextInput1 placeholder="Number of card" />
          <Spacer isSmall />
          <Texts isXTiny font2Regular>
            VALID THRU
          </Texts>
          <Spacer isSmall />
          <Wrapper flexDirectionRow>
            <Wrapper flex={1}>
              <TextInput1 placeholder="MM" />
            </Wrapper>
            <Wrapper flex={0.4} alignItemsCenter justifyContentCenter>
              <Texts
                is
                isRegular
                font2Light
                style={{color: colors.appTextColor4}}>
                /
              </Texts>
            </Wrapper>
            <Wrapper flex={1}>
              <TextInput1 placeholder="YY" />
            </Wrapper>
            <Wrapper flex={0.4}></Wrapper>
            <Wrapper flex={1}>
              <TextInput1 placeholder="CVV" />
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Spacer isBasic />
        <Spacer isSmall />
        <Wrapper alignItemsCenter>
          <Buttons.ColoredGradient
            title={'Save'}
            gradientColors={colors.appGradiant3}
            titleStyle={[
              appStyles.textRegular,
              appStyles.textFont2Regular,
              appStyles.textWhite,
            ]}
            gradientStyle={{height: height(4), paddingHorizontal: width(7.5)}}
            onPress={onPressSave}
          />
        </Wrapper>
        <Spacer isBasic />
      </Wrapper>
    </Modal>
  );
};

export default AddPaymentDetails;

const TextInput1 = ({...props}) => {
  return (
    <TextInputs.ColoredSecondary
      {...props}
      placeholderTextColor={colors.appTextColor4}
      containerStyle={{borderRadius: 2}}
      inputStyle={{
        height: height(5),
        paddingHorizontal: width(2.5),
        fontFamily: fonts.appFont2Light,
        fontSize: fontSizes.small,
      }}
    />
  );
};
