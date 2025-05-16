import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';
import {
  Buttons,
  Common,
  Headers,
  ScrollViews,
  Spacer,
  TextInputs,
  Wrapper,
} from '../../../components';
import {width, height, totalSize} from 'react-native-dimension';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppIcons, appStyles, colors} from '../../../services/utilities';
import {routes} from '../../../services';

export default function index({navigation}) {
  const {navigate, goBack} = navigation;
  const Insets = useSafeAreaInsets();
  return (
    <Wrapper isMain>
      <StatusBar barStyle={'dark-content'} />
      <Spacer height={Insets.top} />
      <Common.BgImageWrapper>
        <Headers.Primary
          title={'Edit Profile'}
          onPressBack={goBack}
          containerStyle={{
            paddingTop: height(2),
            backgroundColor: colors.transparent,
          }}
          backIconColor={colors.appColor1}
          titleStyle={appStyles.textPrimaryColor}
        />
        <ScrollViews.KeyboardAvoiding>
          <Spacer isSmall />
          <TextInputs.Colored title={'First Name'} value={'Mick'} />
          <Spacer isSmall />
          <TextInputs.Colored title={'Last Name'} value={'Tason'} />
          <Spacer isSmall />
          <TextInputs.Colored
            title={'Birthday'}
            value={'09 / 08/ 1996'}
            right={
              <Image
                source={AppIcons.calender_1}
                style={{
                  width: totalSize(3),
                  height: totalSize(3),
                  resizeMode: 'contain',
                }}
              />
            }
          />
          <Spacer isSmall />
          {/* <TextInputs.Colored
                      title={'Vehicle Make'}
                      placeholder={'Enter the makes of your Vehicle'}
                    /> */}
          <TextInput1
            title={'Vehicle Make'}
            placeholder={'Enter the makes of your Vehicle'}
          />
          <Spacer isSmall />
          <TextInput1
            title={'Vehicle Model'}
            placeholder={'Enter model of your Vehicle'}
          />
          <Spacer isSmall />
          <TextInput1
            title={'Vehicle Year'}
            placeholder={'Enter year of your Vehicle'}
          />
          <Spacer isSmall />
          <TextInput1
            title={'Vehicle Color'}
            placeholder={'Enter color of your Vehicle'}
          />
          <Spacer isSmall />
          <TextInput1
            title={'Vehicle Mileage'}
            placeholder={'if unknown enter approximate'}
          />
          <Spacer isBasic />
          <Buttons.ColoredGradient
            title={'SAVE CHANGES'}
            // shadowWhite
            containerStyle={{
              marginHorizontal: width(15),
            }}
            onPress={() => navigate(routes.home)}
          />
          <Spacer height={height(20)} />
        </ScrollViews.KeyboardAvoiding>
      </Common.BgImageWrapper>
    </Wrapper>
  );
}

const TextInput1 = ({...props}) => {
  return (
    <TextInputs.Colored
      placeholderTextColor={colors.appTextColor3}
      inputStyle={[appStyles.textSmall, appStyles.textFont1Bold]}
      {...props}
    />
  );
};
