import {Image, Pressable, StatusBar, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Buttons,
  Headers,
  ScrollViews,
  Spacer,
  TextInputs,
  Texts,
  Wrapper,
  Common,
} from '../../../components';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {appImages, appStyles, colors} from '../../../services/utilities';
import {width, height, totalSize} from 'react-native-dimension';
import Modal from 'react-native-modal';
import {routes} from '../../../services';
// import {PopupPrimary} from '../../../components/common';

const Index = ({navigation}) => {
  const {navigate} = navigation;
  const [isChecked, setChecked] = useState(false);
  const [isConfirmationPopupVisible, setConfirmationPopupVisibility] =
    useState(false);
  const toggleConfirmationPopup = () =>
    setConfirmationPopupVisibility(pv => !pv);
  return (
    <Wrapper isMain>
      {/* <StatusBar barStyle={'light-content'} /> */}
      <Headers.Secondary title={'Vehicle Info'} />
      <ScrollViews.KeyboardAvoiding>
        <Spacer isBasic />
        <Spacer isSmall />
        <Texts isH6 alignCenter>
          Please Enter Details
        </Texts>
        <Spacer isBasic />
        <Spacer isSmall />
        <TextInput1
          title={'Vehicle Year'}
          placeholder={'Enter the year of your Vehicle'}
        />
        <Spacer isSmall />
        <TextInput1
          title={'Vehicle Make'}
          placeholder={'Enter make of your Vehicle'}
        />
        <Spacer isSmall />
        <TextInput1
          title={'Vehicle Modal'}
          placeholder={'Enter model of your Vehicle'}
        />
        <Spacer isSmall />
        <TextInput1
          title={'Vehicle Color'}
          placeholder={'Enter color of your Vehicle'}
        />
        <Spacer isSmall />
        <TextInput1
          title={'Vehicle Mileage'}
          placeholder={'If unknown enter approximate'}
        />
        <Spacer isBasic />

        <Wrapper
          flexDirectionRow
          style={{marginHorizontal: width(7.5), alignItems: 'center'}}>
          <Pressable onPress={() => setChecked(prev => !prev)}>
            <Icon
              name={isChecked ? 'checkbox-outline' : 'checkbox-blank-outline'}
              size={height(2.5)}
              // color={isChecked ? colors.appColor1 : colors.appBackgroundColor1}
            />
          </Pressable>
          <Spacer width={width(2.5)} />
          <Texts isSmall font1Medium>
            Pull Info from profile here
          </Texts>
        </Wrapper>
        <Spacer isBasic />
        <Wrapper marginHorizontalMedium>
          <Buttons.ColoredGradient
            title={'Add'}
            titleStyle={appStyles.textWhite}
            gradientColors={colors.appGradiant3}
            onPress={toggleConfirmationPopup}
          />
        </Wrapper>
        <Spacer isBasic />
      </ScrollViews.KeyboardAvoiding>
      <Common.PopupPrimary
        isVisible={isConfirmationPopupVisible}
        // isVisible={true}
        toggle={toggleConfirmationPopup}
        title="Vehicle has been added successfully! One Step Left!"
        onPressButton={() => {
          toggleConfirmationPopup;
          navigate(routes.selectPriceAndPaymentMethod);
        }}
        buttonText="CONTINUE"
      />
    </Wrapper>
  );
};

export default Index;

const TextInput1 = ({...props}) => {
  return (
    <TextInputs.Colored
      containerStyle={[
        {backgroundColor: colors.appBackgroundColor2},
        appStyles.shadowDark,
      ]}
      placeholderTextColor={colors.appTextColor2 + '78'}
      inputStyle={[appStyles.textSmall, appStyles.textFont1Bold]}
      {...props}
    />
  );
};
