import {View, Text, StatusBar, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  Common,
  Headers,
  Icons,
  Spacer,
  Texts,
  Wrapper,
} from '../../../components';
import {appImages, appStyles, colors} from '../../../services/utilities';
import {width, height, totalSize} from 'react-native-dimension';
import AddPaymentDetails from './addPaymentDetails';
import {routes} from '../../../services';

export default function Index({navigation}) {
  const {goBack, navigate} = navigation;
  const paymentMethods = [
    {logo: appImages.stripe_logo, value: 'stripe'},
    {logo: appImages.android_pay_logo, value: 'android_pay'},
    {logo: appImages.apple_pay_logo, value: 'apple_pay'},
    {logo: appImages.bitPay_logo, value: 'bitPay'},
    {logo: appImages.affirm_logo, value: 'affirm'},
    {logo: appImages.klarna_logo, value: 'klarna'},
  ];
  const topCardBorderRadius = 50;

  const [isAddPaymentDetailsPopupVisible, setAddPaymentDetailsPopupVisibility] =
    useState(false);
  const toggleAddPaymentDetailsPopup = () =>
    setAddPaymentDetailsPopupVisibility(pv => !pv);

  const [isConfirmationPopupVisible, setConfirmationPopupVisibility] =
    useState(false);
  const toggleConfirmationPopup = () =>
    setConfirmationPopupVisibility(pv => !pv);

  return (
    <Wrapper isMain>
      <Headers.Primary
        title={'Select Price & Payment Method'}
        onPressBack={() => goBack()}
      />
      <StatusBar barStyle={'dark-content'} />

      <Wrapper flex={1}>
        <Common.BgImageWrapper>
          <Spacer isBasic />
          <Wrapper
            isColored
            paddingHorizontalZero
            paddingVerticalZero
            marginHorizontalLarge
            style={[
              {borderRadius: topCardBorderRadius},
              // appStyles.shadowDark,
              {shadowColor: colors.appColor1},
            ]}>
            <Wrapper
              style={{
                backgroundColor: colors.appColor2,
                height: height(5),
                borderTopRightRadius: topCardBorderRadius,
                borderTopLeftRadius: topCardBorderRadius,
              }}
            />
            <Wrapper paddingHorizontalBase paddingVerticalBase>
              <Texts isTiny alignCenter>
                YOUR OIL AND FILTER CHARGE WILL BE
              </Texts>
              <Spacer isSmall />
              <Wrapper alignItemsCenter>
                <Wrapper alignItemsCenter>
                  <Texts isH1 style={{fontSize: totalSize(10)}}>
                    87
                  </Texts>
                  <Wrapper style={{position: 'absolute', left: -width(5)}}>
                    <Texts isH1>$</Texts>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
              <Spacer isSmall />
              <Texts isTiny alignCenter>
                THIS WILL HAVE YOU ROLLIN FOR 10,000 MILES - SHOOT WE'LL EVEN
                TOP OFF YOUR WASHER FLUID AND AIR UP YOUR TIRES
              </Texts>
            </Wrapper>
            <Wrapper
              style={{
                backgroundColor: colors.appColor2,
                height: height(5),
                borderBottomRightRadius: topCardBorderRadius,
                borderBottomLeftRadius: topCardBorderRadius,
              }}
            />
          </Wrapper>
          <Spacer isBasic />
          <Texts isMedium font1Medium alignCenter colorPrimary>
            Payment Methods
          </Texts>
          <Spacer isBasic />
          <PaymentMethods
            data={paymentMethods}
            onPressItem={(item, index) => {
              console.log('item : ', item);
              toggleAddPaymentDetailsPopup();
            }}
          />
        </Common.BgImageWrapper>
      </Wrapper>
      <AddPaymentDetails
        isVisible={isAddPaymentDetailsPopupVisible}
        toggle={toggleAddPaymentDetailsPopup}
        onPressSave={() => {
          toggleAddPaymentDetailsPopup();
          setTimeout(() => {
            toggleConfirmationPopup();
          }, 500);
        }}
      />
      <Common.PopupPrimary
        isVisible={isConfirmationPopupVisible}
        // isVisible={true}
        toggle={toggleConfirmationPopup}
        title="Congratulations!"
        info={'We will see you on \n [DATE SCHEDULED]'}
        onPressButton={() => {
          toggleConfirmationPopup();
          navigate(routes.shareFeedback);
        }}
        buttonText="CONTINUE"
      />
    </Wrapper>
  );
}

const PaymentMethods = ({data, onPressItem}) => {
  return (
    <Wrapper
      marginHorizontalMedium
      flexDirectionRow
      alignItemsCenter
      justifyContentSpacebetween
      flexWrapWrap>
      {data?.map((item, index) => {
        const itemSize = width(25);
        return (
          <Pressable key={index} onPress={() => onPressItem(item, index)}>
            <Wrapper
              isColored
              marginHorizontalZero
              paddingHorizontalZero
              paddingVerticalZero
              marginVerticalSmall
              center
              style={[
                {height: itemSize, width: itemSize},
                // appStyles.shadowDark,
                {shadowColor: colors.appBackgroundColor1},
              ]}>
              <Icons.Custom
                source={item.logo}
                size={itemSize - width(5)}
                style={{resizeMode: 'contain'}}
              />
            </Wrapper>
          </Pressable>
        );
      })}
    </Wrapper>
  );
};
