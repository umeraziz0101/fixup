import {View, StyleSheet, Image, StatusBar} from 'react-native';
import React from 'react';
import {appImages, colors} from '../../../services/utilities';
import {height, width} from 'react-native-dimension';
import {
  Buttons,
  Common,
  ScrollViews,
  Spacer,
  TextInputs,
  Texts,
  Wrapper,
} from '../../../components';
import {routes} from '../../../services';

const Login = ({navigation}) => {
  const {goBack, navigate} = navigation;
  return (
    <Wrapper isMain>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <Common.BgImageWrapper>
        <ScrollViews.KeyboardAvoiding>
          <View style={{height: height(10)}} />
          <View style={{alignItems: 'center'}}>
            <Image
              source={appImages.logo_1}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Spacer isLarge />
          <Spacer isLarge />
          <Texts
            isMedium
            font1Medium
            style={[{textAlign: 'center', color: colors.appColor1}]}>
            Enter your phone number to log in!
          </Texts>
          <Spacer isBasic />
          <TextInputs.Colored
            title={'Phone'}
            value={'1234-4567-8978'}
            onChangeText={() => {}}
          />
          <Spacer isBasic />
          <View style={{marginHorizontal: width(10)}}>
            <Texts
              onPress={() => navigate(routes.createAccount)}
              isSmall
              colorPrimary
              font2Light
              style={[{textAlign: 'right'}]}>
              Do you have an account?{` `}
              <Texts font2Bold>Create</Texts>
            </Texts>
          </View>
          <Spacer height={height(10)} />
          <Buttons.ColoredGradient
            title={'LUBE ME UP!'}
            onPress={() => navigate(routes.setUpProfile)}
            containerStyle={{marginHorizontal: width(20)}}
          />
          <View style={{height: height(5)}} />
        </ScrollViews.KeyboardAvoiding>
      </Common.BgImageWrapper>
    </Wrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    height: width(80),
    width: width(90),
  },
});
