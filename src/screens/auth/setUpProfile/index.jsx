import {View, Text, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {
  Common,
  Headers,
  Buttons,
  ScrollViews,
  Spacer,
  TextInputs,
  Texts,
  Wrapper,
} from '../../../components';
import {height, width, totalSize} from 'react-native-dimension';
import {
  AppIcons,
  // appIcons,
  appStyles,
  colors,
  fontSizes,
} from '../../../services/utilities';
import {routes} from '../../../services';

const Index = ({navigation}) => {
  const {goBack, navigate} = navigation;
  return (
    <Wrapper isMain>
      <StatusBar barStyle={'dark-content'} />
      <Headers.Primary title="Set Up Your Profile" onPressBack={goBack} />
      <Wrapper isMain>
        <Common.BgImageWrapper>
          <ScrollViews.KeyboardAvoiding>
            <Spacer isBasic />
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
            <Spacer isLarge />
            <Buttons.ColoredGradient
              title={'DONE'}
              // shadowWhite
              containerStyle={{
                marginHorizontal: width(15),
              }}
              onPress={() => {
                navigate(routes.app);
              }}
            />
            <Spacer isLarge />
          </ScrollViews.KeyboardAvoiding>
        </Common.BgImageWrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Index;

const TextInput1 = ({...props}) => {
  return (
    <TextInputs.Colored
      placeholderTextColor={colors.appTextColor3}
      inputStyle={[appStyles.textSmall, appStyles.textFont1Bold]}
      {...props}
    />
  );
};
